// model
const dogData = () => {
  return {
    maleDogs: 0,
    femaleDogs: 0,
    maleOwnersAgeHistogram: {},
    femaleOwnersAgeHistogram: {},
    colorHistogram: {},
    ageHistogram: {},
    dogs: [],
  };
};

const aggregateAllBreeds = (dogs) => {
  const aggBreed = dogs.reduce((acc, dog) => {
    calculateProperties(acc, dog);
    return acc;
  }, dogData());

  return aggBreed;
};

const getDogsGrpByBreed = (dogs) => {
  const groupedByBreed = dogs.reduce((acc, dog) => {
    if (!acc[dog.RASSE1]) {
      acc[dog.RASSE1] = dogData();
    }
    calculateProperties(acc[dog.RASSE1], dog);

    return acc;
  }, {});

  let breeds = [];
  Object.entries(groupedByBreed).forEach(([breed, props], idx) => {
    breeds.push({ ID:idx, name: breed, props: props });
  });
  return breeds;
};

function calculateProperties(acc, dog) {
  // count male vs female dogs
  if (dog.GESCHLECHT_HUND === "m") acc.maleDogs++;
  if (dog.GESCHLECHT_HUND === "w") acc.femaleDogs++;

  // count male vs female dog owners
  if (dog.GESCHLECHT === "m") {
    if (!acc.maleOwnersAgeHistogram[dog.ALTER]) {
      acc.maleOwnersAgeHistogram[dog.ALTER] = 0;
    }
    acc.maleOwnersAgeHistogram[dog.ALTER]++;
  }
  if (dog.GESCHLECHT === "w") {
    if (!acc.femaleOwnersAgeHistogram[dog.ALTER]) {
      acc.femaleOwnersAgeHistogram[dog.ALTER] = 0;
    }
    acc.femaleOwnersAgeHistogram[dog.ALTER]++;
  }

  // colors
  if (!acc.colorHistogram[dog.HUNDEFARBE]) {
    acc.colorHistogram[dog.HUNDEFARBE] = 0;
  }
  acc.colorHistogram[dog.HUNDEFARBE]++;

  // dogs birth year
  if (!acc.ageHistogram[dog.GEBURTSJAHR_HUND]) {
    acc.ageHistogram[dog.GEBURTSJAHR_HUND] = 0;
  }
  acc.ageHistogram[dog.GEBURTSJAHR_HUND]++;

  acc.dogs.push(dog);
}

const getMaxDogCountPerBreed = (breeds) => {
  let maxDogCount = 0;

  breeds.forEach((b) => {
    const dogCount = b.props.dogs.length;
    if (dogCount > maxDogCount) {
      maxDogCount = dogCount;
    }
  });
  return maxDogCount;
};

const getAgeHistogramDomain = (breeds) => {
  const years = breeds
    .map((b) => Object.keys(b.props.ageHistogram))
    .flat()
    .map(Number);
  return [...new Set(years)].sort((a, b) => a - b);
};

export const gridViewService = {
  getAgeHistogramDomain,
  getMaxDogCountPerBreed,
  getDogsGrpByBreed,
  aggregateAllBreeds,
};
