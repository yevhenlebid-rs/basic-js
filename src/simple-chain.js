const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chainValues: [],

  getLength() {
    return this.chainValues.length
  },

  addLink(value) {
    this.chainValues.push(value)
    return this
  },

  removeLink(position) {
    if (position < 0) {
      this.chainValues = []
      throw new Error('THROWN')
    }
    let newArr = [
      ...this.chainValues.slice(0, position - 1),
      ...this.chainValues.slice(position)
    ]
    this.chainValues = [...newArr]
    return this
  },

  reverseChain() {
    this.chainValues.reverse()
    return this
  },

  finishChain() {
    let chainString = ''
    for (const el of this.chainValues) {
      chainString += !chainString.length ? `( ${el} )` : `~~( ${el} )`
    }
    this.chainValues = []
    return chainString
  }

};

module.exports = chainMaker;
