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
 function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  let sum = arr.filter(i =>typeof(i) === 'string').map((i,ind, ar, some) => {
    
  if(i.replace(/\s+/g,'').charAt(0).toLowerCase()) {
       return i.replace(/\s+/g,'').charAt(0).toUpperCase()
     }
     else if(i === '') {
       return null
     }
   }).sort().join('')
return sum
}

module.exports = {
  createDreamTeam
};
