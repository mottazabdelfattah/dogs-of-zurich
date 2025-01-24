// src/constants.js
export const COLUMN_WIDTH = 150; // Max width of the bar
export const ROW_HEIGHT = 30; // Height of the bar
export const BAR_HEIGHT = 15; // Height of the bar


export const OWNERS_AGE_GROUPS = {
    '11-20': 0,
    '21-30': 1,
    '31-40': 2,
    '41-50': 3,
    '51-60': 4,
    '61-70': 5,
    '71-80': 6,
    '81-90': 7,
    '91-100': 8,
};

export const GRID_COLUMNS = {
    BREED: {
      label: "Breed",
      sortFunctionAsc: (a, b) => a.name.localeCompare(b.name),
      sortFunctionDesc: (a, b) => b.name.localeCompare(a.name),
    },
    COUNT: {
      label: "Count",
      sortFunctionAsc: (a, b) => b.props.dogs.length - a.props.dogs.length,
      sortFunctionDesc: (a, b) => a.props.dogs.length - b.props.dogs.length,
    },
    Sex: {
      label: "Sex",
    },
    DOG_AGE: {
      label: "Birth Year",
    },
    COLOR: {
      label: "Colors",
    },
    OWNER: {
      label: "Owners Age Groups",
    },
  };