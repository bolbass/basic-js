const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
	let arr = [];
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    for (let j = i; j < (str.length - 1) && str[i] == str[i+1]; j++){
      count++;
      i++;
    }
    arr.push([count, str[i]]);
  }
	arr = arr.flat();
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 1) {
			arr.splice(i, 1);
		}
	}
	arr = arr.join("");
  return arr; }

module.exports = {
  encodeLine
};
