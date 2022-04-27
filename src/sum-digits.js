const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

 function getSumOfDigits(n) {
    
  if (n < 9) return n;

  let answer = 0;
  let lastNumber = 0;
  while (n > 0) {

    lastNumber = n % 10;
    n = Math.floor(n / 10);
    answer += lastNumber
  }

  if (answer > 9) {
    return getSumOfDigits(answer);
  } else {
    return answer;
  }
  
}


module.exports = {
  getSumOfDigits
};
