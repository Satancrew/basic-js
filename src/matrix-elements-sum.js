const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {

  let zeroArrayLength = matrix[0].length
  // console.log(zeroArrayLength);

  let answer = 0;
  for (let i = 0; i < zeroArrayLength; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) {
        break
      } else {
        answer += matrix[j][i]
      }
    }
  }
  return answer;
}


module.exports = {
  getMatrixElementsSum
};
