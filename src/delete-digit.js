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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrNumN = [];
  n = String(n);

  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

  for (let i = 0; i < n.length; i++) {
    let splArr = n.split('');
    splArr.splice(i, 1);
    arrNumN.push(Number(splArr.join('')));
  }
  arrNumN.sort(compareNumeric);
  console.log(arrNumN);
  return arrNumN[arrNumN.length - 1];

}

module.exports = {
  deleteDigit
};
