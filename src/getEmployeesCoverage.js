const data = require('../data/zoo_data');

const getSpecies = (arrayId) => data.species
  .filter(({ id }) => arrayId.includes(id)).map(({ name }) => name);

const getLocation = (arrayId) => data.species
  .filter(({ id }) => arrayId.includes(id)).map(({ location }) => location);

const getInfoByName = (name) => {
  const people = data.employees
    .filter(({ firstName, lastName }) => firstName === name || lastName === name)[0];
  return {
    id: people.id,
    fullName: `${people.firstName} ${people.lastName}`,
    species: getSpecies(people.responsibleFor),
    locations: getLocation(people.responsibleFor),
  };
};

const getInfoById = (peopleId) => {
  const { id, firstName, responsibleFor, lastName } = data
    .employees.filter(({ id: people }) => people === peopleId)[0];
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getSpecies(responsibleFor),
    locations: getLocation(responsibleFor),
  };
};

const getAllPeoples = () =>
  data.employees.reduce((acc, { id, firstName, lastName, responsibleFor }) => ([
    ...acc,
    {
      id,
      fullName: `${firstName} ${lastName}`,
      species: getSpecies(responsibleFor),
      locations: getLocation(responsibleFor),
    },
  ]), []);

const checkedInput = (obj) =>
  data.employees.some(({ id }) =>
    id === obj.id);

const getEmployeesCoverage = (obj) => {
  if (!obj) {
    return getAllPeoples();
  }
  if (obj.name) {
    return getInfoByName(obj.name);
  }
  if (!checkedInput(obj)) {
    throw new Error('Informações inválidas');
  }
  return getInfoById(obj.id);
};

console.log(getEmployeesCoverage({ name: 'Nigel' }));

module.exports = getEmployeesCoverage;
