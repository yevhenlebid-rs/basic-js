const CustomError = require("../extensions/custom-error");

module.exports = function repeater(
  str, {
    repeatTimes,
    separator = '+',
    addition,
    additionRepeatTimes,
    additionSeparator = '|'
  }) {

  if (addition !== undefined) {
    addition = String(addition)
  }
  str = String(str)

  let repeatedStr = addition ? str + addition : str

  if (additionRepeatTimes) {
    for (let i = 1; i < additionRepeatTimes; i++) {
      repeatedStr += additionSeparator + addition
    }
  }

  if (repeatTimes) {
    let tempStr = repeatedStr
    for (let i = 1; i < repeatTimes; i++) {
      repeatedStr += separator + tempStr
    }
  }

  return repeatedStr
}
  