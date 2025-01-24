import { COLUMN_WIDTH, ROW_HEIGHT, BAR_HEIGHT } from "../../../constants";

export default function BreedSex({ maleDogsCount, femaleDogsCount }) {
  const totalDogCount = maleDogsCount + femaleDogsCount;
  const yOffset = (ROW_HEIGHT - BAR_HEIGHT) / 2;
  const barWidth = COLUMN_WIDTH;
  const malePercent = maleDogsCount / totalDogCount;
  const femalePercent = femaleDogsCount / totalDogCount;
  const maleBarWidth = malePercent * barWidth;
  const femaleBarWidth = femalePercent * barWidth;
  return (
    <>
      <svg height={ROW_HEIGHT} width={COLUMN_WIDTH}>
        <rect
          x="0"
          y={yOffset}
          width={maleBarWidth}
          height={BAR_HEIGHT}
          fill="rgb(103,169,207)"
        ></rect>
        <rect
          x={maleBarWidth}
          y={yOffset}
          width={femaleBarWidth}
          height={BAR_HEIGHT}
          fill="rgb(239,138,98)"
        />
        {malePercent > 0 && (
          <text
            x={maleBarWidth / 2 - 15}
            y={yOffset + BAR_HEIGHT / 2}
            fontSize="10"
            fill="black"
            alignmentBaseline="middle"
          >
            {`${(malePercent * 100).toFixed(1)}%`}
          </text>
        )}
        {femalePercent > 0 && (
          <text
            x={maleBarWidth + (femaleBarWidth / 2 - 15)}
            y={yOffset + BAR_HEIGHT / 2}
            fontSize="10"
            fill="black"
            alignmentBaseline="middle"
          >
            {`${(femalePercent * 100).toFixed(1)}%`}
          </text>
        )}
      </svg>
    </>
  );
}
