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
  const array = String(n).split('');
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    const copyArr = [...array];
    copyArr.splice(i, 1);
    const num = +copyArr.join('');
    if (num > max) {
      max = num;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
