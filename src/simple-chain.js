const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let stringValue = value != null ? value.toString() : value + '';
    this.chain.push(stringValue);
    return this;
  },
  removeLink(position) {
    if(!this.chain[position-1]){
      throw new Error("You can\'t remove incorrect link!");
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    return this.chain.map(chain => {
      return `( ${chain ? chain + ' ': ''})`;
    }).join('~~');
  }
};

module.exports = {
  chainMaker
};
