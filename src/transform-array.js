const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('THROWN')
  }

  const discardPrev = '--discard-prev'
  const doublePrev = '--double-prev'
  const discardNext = '--discard-next'
  const doubleNext = '--double-next'

  let finalArr = [...arr]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === discardPrev) {
      finalArr[i] = undefined
      finalArr[i - 1] = undefined
    } else if (arr[i] === doublePrev) {
      finalArr[i] = finalArr[i - 1]
    } else if (arr[i] === discardNext) {
      finalArr[i] = undefined
      finalArr[i + 1] = undefined
    } else if (arr[i] === doubleNext) {
      finalArr[i] = finalArr[i + 1]
    }
  }

  return finalArr.filter((el) => el !== undefined)

}
