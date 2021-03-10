const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return false
    }

    let depth = 0

    for (let el of arr) {
      let counter = this.calculateDepth(el)
      if (counter > depth) {
        depth = counter
      }
    }
    return depth + 1
  }
}
