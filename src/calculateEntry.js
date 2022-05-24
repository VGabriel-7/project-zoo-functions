const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const countsAges = { adult: 0, senior: 0, child: 0 };
  entrants.forEach(({ age }) => {
    if (age < 18) {
      countsAges.child += 1;
    } else if (age >= 18 && age < 50) {
      countsAges.adult += 1;
    } else {
      countsAges.senior += 1;
    }
  });
  return countsAges;
};

const calculateEntry = (entrants) => {
  if (entrants === undefined || Object.keys(entrants).length === 0) { return 0; }
  const allPrices = Object.values(prices);
  return Object.values(countEntrants(entrants))
    .reduce((acc, curr, idx) => (curr * allPrices[idx]) + acc, 0);
};

module.exports = { calculateEntry, countEntrants };
