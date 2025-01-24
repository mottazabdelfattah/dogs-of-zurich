import {
  COLUMN_WIDTH,
  ROW_HEIGHT,
  BAR_HEIGHT,
  OWNERS_AGE_GROUPS,
} from "../../../constants";
import { SEQUENTIAL_BLUE, SEQUENTIAL_RED } from "../../../colors";
import useTooltip from "../../../utils/useTooltip";
import Tooltip from "../../../utils/Tooltip";
import { mybreedOwnerHistogramService } from "./breedOwnerHistogramService";

export default function BreedOwnerHistogram({
  maleOwnersHistogram,
  femaleOwnersHistogram,
}) {
  const { tooltipText, tooltipStyle, showTooltip, hideTooltip } = useTooltip();

  const maleArr = Object.entries(maleOwnersHistogram);
  const femaleArr = Object.entries(femaleOwnersHistogram);
  mybreedOwnerHistogramService.sortAgeGroups(maleArr, false);
  mybreedOwnerHistogramService.sortAgeGroups(femaleArr, true);

  const sumMales = maleArr.reduce((acc, [age_grp, count]) => count + acc, 0);
  const sumFemales = femaleArr.reduce(
    (acc, [age_grp, count]) => count + acc,
    0
  );

  const maleBarCoordinates = mybreedOwnerHistogramService.getHistogramBars(
    maleArr,
    sumMales
  );
  const femaleBarCoordinates = mybreedOwnerHistogramService.getHistogramBars(
    femaleArr,
    sumFemales
  );

  const total = sumMales + sumFemales;
  const yOffset = (ROW_HEIGHT - BAR_HEIGHT) / 2;
  const maleBarWidth = (sumMales / total) * COLUMN_WIDTH;
  const femaleBarWidth = (sumFemales / total) * COLUMN_WIDTH;

  // males bars
  const maleBarsLbls = sumMales > 0 && (
    <text
      x={maleBarWidth / 2 - 15}
      y={yOffset + BAR_HEIGHT / 2}
      fontSize="10"
      fill="black"
      alignmentBaseline="middle"
      className="txtLbl"
    >
      {`${((sumMales / total) * 100).toFixed(1)}%`}
    </text>
  );
  const maleBars = maleBarCoordinates.map((bar, idx) => {
    return (
      <rect
        key={`m-${idx}`}
        x={bar.x * maleBarWidth}
        y={bar.y + yOffset}
        width={bar.width * maleBarWidth}
        height={bar.height * BAR_HEIGHT}
        fill={`rgb(${
          SEQUENTIAL_BLUE[parseInt(OWNERS_AGE_GROUPS[bar.dataValue])].rgb
        })`}
        data-tooltip={bar.tootltipText}
        onMouseOver={showTooltip}
        onMouseOut={hideTooltip}
      />
    );
  });

  // females bars
  const femaleBarsLbls = sumFemales > 0 && (
    <text
      x={maleBarWidth + femaleBarWidth / 2 - 15}
      y={yOffset + BAR_HEIGHT / 2}
      fontSize="10"
      fill="black"
      alignmentBaseline="middle"
      className="txtLbl"
    >
      {`${((sumFemales / total) * 100).toFixed(1)}%`}
    </text>
  );
  const femaleBars = femaleBarCoordinates.map((bar, idx) => {
    return (
      <rect
        key={`f-${idx}`}
        x={maleBarWidth + bar.x * femaleBarWidth}
        y={bar.y + yOffset}
        width={bar.width * femaleBarWidth}
        height={bar.height * BAR_HEIGHT}
        fill={`rgb(${
          SEQUENTIAL_RED[parseInt(OWNERS_AGE_GROUPS[bar.dataValue])].rgb
        })`}
        data-tooltip={bar.tootltipText}
        onMouseOver={showTooltip}
        onMouseOut={hideTooltip}
      />
    );
  });

  return (
    <>
      <Tooltip tooltipStyle={tooltipStyle} tooltipText={tooltipText} />
      <svg height={ROW_HEIGHT} width={COLUMN_WIDTH}>
        {maleBars}
        {maleBarsLbls}
        {femaleBars}
        {femaleBarsLbls}
      </svg>
    </>
  );
}
