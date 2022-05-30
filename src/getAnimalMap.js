const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const getMapAllAnimals = () =>
  species.reduce((acc, { location, name }) => ({
    ...acc,
    [location]: [...(acc[location] || []), name],
  }), {});

const getMapAnimalNames = () =>
  species.reduce((acc, { location, residents, name }) => {
    const animalNames = residents.map(({ name: nameAnimal }) => nameAnimal);
    return {
      ...acc,
      [location]: [
        ...(acc[location] || []),
        ...[{ [name]: [...animalNames] }],
      ],
    };
  }, {});

const getMapAnimalNamesSort = () =>
  species.reduce((acc, { location, residents, name }) => {
    const animalNames = residents.map(({ name: nameAnimal }) => nameAnimal).sort();
    return {
      ...acc,
      [location]: [
        ...(acc[location] || []),
        ...[{ [name]: [...animalNames] }],
      ],
    };
  }, {});

const getAnimalsBySexSort = (options) =>
  species.reduce((acc, { location, residents, name }) => {
    const animalNames = residents.filter(({ sex }) => sex === options.sex)
      .map(({ name: animalName }) => animalName).sort();
    return {
      ...acc,
      [location]: [
        ...(acc[location] || []),
        ...[{ [name]: [...animalNames] }],
      ],
    };
  }, {});

const getAnimalsBySex = (options) => {
  if (options.sorted) {
    return getAnimalsBySexSort(options);
  }
  return species.reduce((acc, { location, residents, name }) => {
    const animalNames = residents.filter(({ sex }) => sex === options.sex)
      .map(({ name: animalName }) => animalName);
    return {
      ...acc,
      [location]: [
        ...(acc[location] || []),
        ...[{ [name]: [...animalNames] }],
      ],
    };
  }, {});
};

function getAnimalMap(options) {
  if (!options || !Object.keys(options).includes('includeNames')) {
    return getMapAllAnimals();
  }
  if (options.sex) {
    return getAnimalsBySex(options);
  }
  if (options.sorted) {
    return getMapAnimalNamesSort();
  }
  return getMapAnimalNames();
}

module.exports = getAnimalMap;
