const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  options.repeatTimes = typeof options.repeatTimes !== 'undefined' ?  options.repeatTimes : 1;
  options.separator = typeof options.separator !== 'undefined' ?  options.separator : '+';
  options.addition = typeof options.addition !== 'undefined' ?  options.addition : '';
  options.additionRepeatTimes = typeof options.additionRepeatTimes !== 'undefined' ?  options.additionRepeatTimes : 1;
  options.additionSeparator = typeof options.additionSeparator !== 'undefined' ?  options.additionSeparator : '|';

  str = String(str);
  options.addition = String(options.addition);

  let retStr = '';
  for (let i = 0; i < options.repeatTimes; i++) {
    retStr = retStr + str;
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      retStr = retStr + options.addition;
      if (i < options.additionRepeatTimes - 1) {
        retStr = retStr + options.additionSeparator;
      }
    }
    if (i < options.repeatTimes - 1) {
      retStr = retStr + options.separator;
    }
  }
  return retStr;
}

module.exports = {
  repeater
};
