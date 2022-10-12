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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
if (Array.isArray(members) === false) {
  return false;
} else {
  let arrOnlyString = [];
  for (const item of members) {
    if (typeof item === 'string') {
      arrOnlyString.push(item);
    }
  }
  console.log(arrOnlyString);
  let noWhitespasesArr = arrOnlyString.map(item => item.replace(/ /g,'').toUpperCase());

  if (noWhitespasesArr.length === 0) {
    return false;
  } else {
    noWhitespasesArr.sort();
    console.log(noWhitespasesArr);
    let result = noWhitespasesArr.reduce((str, current) => str + current[0], '');
    //let upCaseResult = result.toUpperCase();
    console.log(result);
    return result;
  }
}
}
module.exports = {
  createDreamTeam
};
