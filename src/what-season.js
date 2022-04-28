const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {

  const seasonByMonthObj = {
    'winter': [11, 0, 1],
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10],
  }

  if (typeof date === 'undefined') {
    return 'Unable to determine the time of year!';
  }

  try {
    date.getTime();
  } catch (e) {
    throw new Error('Invalid date!')
  }

  const month = date.getMonth();
  let check = 0;

  for (let key in seasonByMonthObj) {
    if (seasonByMonthObj[key].includes(month)) {
      check++
      return key;
    } 
  }

  if (check === 0) {
    throw new Error('Invalid date!')
  }
  
}

module.exports = {
  getSeason
};
