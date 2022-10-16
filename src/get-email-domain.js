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
  let arr1 = email.split('@');
  console.log(arr1);

  return arr1[arr1.length - 1];
}

module.exports = {
  getEmailDomain
};
