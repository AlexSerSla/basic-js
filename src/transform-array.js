const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (Array.isArray(arr) === false) {
    throw new Error("You can't remove incorrect link!");
  }

  let posSlice = 0;
  let goSlice = false;
  let goSlicePrev = false;
  let goThirdSlice = false;

  let resArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (arr.length - 1 > i) {
        goSlice = true;
        posSlice = i;
      }
    } else if (arr[i] === '--discard-prev') {
      if (i > 0) {
        goSlice = true;
        posSlice = i - 1;
      } else {
        goSlicePrev = true;
      }
    } else if (arr[i] === '--double-next') {
      if (arr.length - 1 > i) {
        resArr[i] = arr[i + 1];
      }
    } else if (arr[i] === '--double-prev') {
      if (i > 0) {
        if ((goSlice === true) && (posSlice === i - 2)) {
          goThirdSlice = true;
        } else {
          resArr[i] = arr[i - 1];
        }
      } else {
        goSlicePrev = true;
      }
    } else {
      resArr[i] = arr[i];
    }
  }
  if (goSlicePrev === true) {
    resArr.splice(0, 1);
    goSlicePrev = false;
  }

  if (goSlice === true) {
    if (goThirdSlice === true) {
      resArr.splice(posSlice, 3);
    } else {
      resArr.splice(posSlice, 2);
    }
    goThirdSlice = false;
    goSlice = false;
    posSlice = 0;
  }
  return resArr;
}

module.exports = {
  transform
};
