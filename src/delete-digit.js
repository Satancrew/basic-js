const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let max = 0;

  let newStringArr = [];
  for (let i = 0; i < String(n).length; i++) {
    newStringArr.push(String(n)[i])
  }

  for (let i = 0; i < newStringArr.length; i++) {
    let test = 0;
    test = +((newStringArr.slice(0, i) + newStringArr.slice(i + 1))).split(",").join('');
    
    if (test > max) {
      max = test;
    }
    
  }

  return max;

}

module.exports = {
  deleteDigit
};
