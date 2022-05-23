const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    return data.species.reduce((acc, { name, residents }) => ({
      ...acc,
      [name]: residents.length,
    }), {});
  }
  const filteredAnimal = data.species.find(({ name }) => animal.specie === name).residents;
  const arrayAnimal = Object.keys(animal);
  if (arrayAnimal.includes('sex')) {
    return filteredAnimal.reduce((acc, { sex }) => ((sex === animal.sex) ? acc + 1 : acc + 0), 0);
  }
  return filteredAnimal.length;
};

module.exports = countAnimals;
