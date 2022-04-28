const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {

  let check = true;
  let countDefis = 0;
  for (let i = 0; i < n.length; i++) {
    
    if (n[i] === '-') {
      countDefis++
    }

    if ( (n[i].charCodeAt(0) <= 70 && n[i].charCodeAt(0) >= 65) || (n[i].charCodeAt(0) >= 48 && n[i].charCodeAt(0) <= 57) || (n[i].charCodeAt(0) === 45)) {
      check = true;
    } else {
      check = false;
      break;
    }

}

if (countDefis != 5) {
  check = false;
}

return check;
}

module.exports = {
  isMAC48Address
};
