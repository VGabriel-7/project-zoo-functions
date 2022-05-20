const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const [{ residents }] = data.species.filter(({ name }) => name === animal);
  return residents.every(({ age: ageAnimal }) => ageAnimal >= age);
}

module.exports = getAnimalsOlderThan;
