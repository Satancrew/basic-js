const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

 function createDreamTeam(members) {

  let dreamTag = '';
  if (!Array.isArray(members)) {
    return false;
  } else if (members !== members.sort()) {
    members.sort()
  }
  
  let nameWithoutWhitespaces;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      nameWithoutWhitespaces = members[i].split(' ').join('');
      dreamTag += nameWithoutWhitespaces[0];
    }
  }
  
  if (dreamTag.length > 0) {
    return dreamTag.toUpperCase().split('').sort().join('').toUpperCase()
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
