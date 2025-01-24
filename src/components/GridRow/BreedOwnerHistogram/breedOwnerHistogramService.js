const getHistogramBars = (arr, sum, xOffset = 0, yOffset = 0) => {
  const barCoordinates = [];

  arr.forEach(([age_grp, count]) => {
    const percentage = count / sum;
    barCoordinates.push({
      x: xOffset,
      y: yOffset,
      width: percentage,
      height: 1.0,
      dataValue: age_grp,
      tootltipText: `${age_grp} (${(percentage * 100).toFixed(1)}%)`,
    });
    xOffset += percentage;
  });
  return barCoordinates;
};

const sortAgeGroups = (arr, isAsc) => {
  arr.sort((a, b) => {
    const lowerA = parseInt(a[0].split("-")[0]);
    const lowerB = parseInt(b[0].split("-")[0]);
    return lowerB - lowerA;
  });
  if (isAsc) {
    arr.reverse();
  }
};

export const mybreedOwnerHistogramService = {
  sortAgeGroups,
  getHistogramBars,
};
