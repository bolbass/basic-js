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
  let s = '';
  for (let i = 0; i < domains.length; i++){
      let newArr = domains[i].split('.').reverse();
      // let k = Object.keys(obj);
    for (let j = 0; j < newArr.length; j++){
      if (obj.newArr[j] == true){
        obj[newArr[j]]++;
      }else {
        let s = '.' + newArr[j];
        obj[s] = 1
      }
    
  }
}
}

module.exports = {
  getDNSStats
};
