const data = require('../data/zoo_data');

const getOldAnimal = (idAnimal) => Object.values(data.species
  .filter((animal) => animal.id === idAnimal)[0].residents.reduce((acc, curr) => ((curr
    .age > acc.age) ? curr : acc)));

const getOldestFromFirstSpecies = (id) => {
  const [idAnimal] = data.employees.filter(({ id: peopleID }) => peopleID === id)
    .map(({ responsibleFor }) => responsibleFor[0]);
  return getOldAnimal(idAnimal);
};

module.exports = getOldestFromFirstSpecies;
