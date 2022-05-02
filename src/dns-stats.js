const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
let obj = {};
for (let i = 0; i < domains.length; i++) {
  domains[i] = "." + domains[i];
  let dotIndexes = []
  for (let j = 0; j < domains[i].length; j++) {
    if (domains[i][j] == ".") {
      dotIndexes.push(j);
    }
  }

  for (let k = 0; k < dotIndexes.length; k++) {
    let dom = domains[i].split("").slice(dotIndexes[k]).join("");
    console.log(dom)
    dom="."+ dom.split(".").reverse().join(".");
    dom=dom.slice(0, -1)
    if (dom in obj) {
      obj[dom] += 1;
    } else {
      obj[dom] = 1;
    }
  }
}
let arr = Object.entries(obj).sort((a, b) => a[0].length - b[0].length); 
let newObj = {};
for (let l = 0; l < arr.length; l++) {
    newObj[arr[l].slice(0, arr[l].length - 3)] = +(arr[l]
    .slice(arr[l].length - 3)
    .join());
}
return newObj;
 }


module.exports = {
  getDNSStats
};
