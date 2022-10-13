const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let arrIndex = [];
  arr.forEach((element, index) => {
    if (element === -1) arrIndex.push(index);
  });

  let newArr = arr.filter((value) => {
    return value !== -1;
  })

  newArr.sort((a, b) => a - b);

  arrIndex.forEach(value => {
    newArr.splice(value, 0, -1);
  })
  return newArr;
}

module.exports = {
  sortByHeight
};
