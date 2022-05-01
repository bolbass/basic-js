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
 function repeater(str = '', { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' }) {  
  let string = String(str);
  let add = String(addition);

  let result = '',
      plus = '',
      count = 0;
  
  if (add.length != 0) {
    while (count < additionRepeatTimes) {
    plus += add + additionSeparator;
    count++;
    }
    plus = plus.slice(0, plus.length - additionSeparator.length);
    count = 0;
  }
  
  
  while (count < repeatTimes) {
    result += string + plus + separator;
    count++;
  }
  
  result = result.slice(0, result.length - separator.length);
  
  return result;
}

module.exports = {
  repeater
};
