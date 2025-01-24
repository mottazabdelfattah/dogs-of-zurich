import { COLUMN_WIDTH, ROW_HEIGHT, BAR_HEIGHT } from "../../../constants";
export default function DogsCountBar({
  count,
  maxCount,
}) {
  const totalDogCount = count;
  const margin = 25;
  const yOffset = (ROW_HEIGHT - BAR_HEIGHT) / 2;
  const barWidth = (totalDogCount / maxCount) * (COLUMN_WIDTH - margin);
  
  return (
    <svg height={ROW_HEIGHT} width={COLUMN_WIDTH}>
      <rect x="0" y={yOffset} width={barWidth} height={BAR_HEIGHT} fill="rgb(5,113,176)" />
      <text
        x={barWidth + 2}
        y={yOffset + (BAR_HEIGHT/2)}
        fontSize="10"
        fill="black"
        alignmentBaseline="middle"
      >
        {`${totalDogCount} (${((totalDogCount / maxCount)* 100).toFixed(1)}%)`}
      </text>
    </svg>
  );
}
