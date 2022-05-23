const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const [objectEmployee = {}] = data.employees
    .filter(({ firstName, lastName }) => employeeName === firstName || employeeName === lastName);
  return objectEmployee;
};

module.exports = getEmployeeByName;
