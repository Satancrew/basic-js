const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {

  const neededIndex = email.lastIndexOf('@') + 1;
  const lngth = email.length;
  const answer = email.substring(neededIndex, lngth)

  return answer;
  
}

module.exports = {
  getEmailDomain
};
