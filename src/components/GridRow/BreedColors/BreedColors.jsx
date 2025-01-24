import { COLOR_LOOKUP_TABLE } from "../../../colors";
import { COLUMN_WIDTH, ROW_HEIGHT } from "../../../constants";
import useTooltip from "../../../utils/useTooltip";
import Tooltip from "../../../utils/Tooltip";

export default function BreedColors({ colorHistogram }) {
  const { tooltipText, tooltipStyle, showTooltip, hideTooltip } = useTooltip();
  const colorArr = Object.entries(colorHistogram).sort((a, b) => b[1] - a[1]);
  const sum = colorArr.reduce((acc, [colorname, count]) => acc + count, 0);

  const barCoordinates = [];
  let xOffset = 0;
  colorArr.forEach(([colorname, count], index) => {
    const w = (count / sum) * COLUMN_WIDTH;
    barCoordinates.push({ xOffset: xOffset, barWidth: w });
    xOffset += w;
  });

  const colorSpectrum = colorArr.map(([colorname, count], idx) => {
    const bar = barCoordinates[idx];
    const colors = colorname.split("/");
    return colors.map((c, cIdx) => {
      const h = ROW_HEIGHT / colors.length;
      return (
        <rect
          key={`${idx}-${cIdx}`}
          x={bar.xOffset}
          y={cIdx * h}
          width={bar.barWidth}
          height={h}
          fill={`rgb(${COLOR_LOOKUP_TABLE[c]})`}
          data-tooltip={c}
          onMouseOver={showTooltip}
          onMouseOut={hideTooltip}
        />
      );
    });
  });

  return (
    <>
      <Tooltip tooltipStyle={tooltipStyle} tooltipText={tooltipText} />
      <svg height={ROW_HEIGHT} width={COLUMN_WIDTH}>
        {colorSpectrum}
      </svg>
    </>
  );
}
