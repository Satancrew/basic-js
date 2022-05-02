const { NotImplementedError } = require('../extensions/index.js');



/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  
  let shortName = sampleActivity;
  if (typeof shortName !== 'string' || !shortName || isNaN(shortName) || shortName <= 0 || shortName > MODERN_ACTIVITY) {
    return false;
  }

  +shortName;
  let test = 0.693 / HALF_LIFE_PERIOD;
  let answer = Math.ceil(Math.log(MODERN_ACTIVITY / shortName) / test);
  return answer;
}

module.exports = {
  dateSample
};
