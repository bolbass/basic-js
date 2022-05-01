const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  const MA= 15; 
  const HALF_LIFE= 5730;
  
  if ((typeof sampleActivity !== "string" ) || (isNaN(sampleActivity)) ) {
    return false  
  } else {
    let y = - Math.log( sampleActivity / MA ) * HALF_LIFE / Math.LN2;
    if((Math.ceil(y) !== Infinity) && (Math.ceil(y) > 0)){ return Math.ceil(y) }
      else{ return false}
  }
};

module.exports = {
  dateSample
};
