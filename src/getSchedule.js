const data = require('../data/zoo_data');

const getAnimalDays = (animalDays) => data.species
  .filter(({ name }) => animalDays === name)[0].availability;

const officeHour = (hours, day) => {
  if (day === 'Monday') { return 'CLOSED'; }
  return `Open from ${hours.open}am until ${hours.close}pm`;
};

const exhibition = (oneDay) => {
  if (oneDay === 'Monday') { return 'The zoo will be closed!'; }
  const animalDays = data.species.filter(({ availability }) => availability.includes(oneDay));
  return animalDays.map(({ name }) => name);
};

const getADay = (day) => {
  if (day === 'Monday') {
    return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  return {
    officeHour: officeHour(data.hours[day], day),
    exhibition: exhibition(day),
  };
};

const getAllSchedules = () => Object.keys(data.hours).reduce((acc, curr) => ({
  ...acc, [curr]: getADay(curr) }), {});

function getSchedule(scheduleTarget) {
  const arrayAnimals = data.species.map((animal) => animal.name);
  if (arrayAnimals.includes(scheduleTarget)) {
    return getAnimalDays(scheduleTarget);
  } if (Object.keys(data.hours).includes(scheduleTarget)) {
    return { [scheduleTarget]: getADay(scheduleTarget) };
  }
  return getAllSchedules();
}

module.exports = getSchedule;
