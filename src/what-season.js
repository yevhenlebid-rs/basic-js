const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  } else if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('THROWN');
  }

  let getMonth = date.getMonth()

  switch (getMonth) {
    case 11:
    case 0:
    case 1:
      return 'winter'
    case 2:
    case 3:
    case 4:
      return 'spring'
    case 5:
    case 6:
    case 7:
      return 'summer'
    case 8:
    case 9:
    case 10:
      return 'autumn'
  }
}


// if (!date) {
//   throw new Error('Unable to determine the time of year!')
// } else if (date.constructor != 'function Date() { [native code] }') {
//   return 'FAIL'
// } else if (date.constructor != Date) {
//   throw new Error('THROWN');
// }