const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(numActivity) {
  if (!(typeof numActivity === 'string' &&
    numActivity < 9000 &&
    parseInt(numActivity) >= 0)) {
    return false
  }
  if (isNaN(numActivity)) {
    return false
  }

  let k = 0.693 / HALF_LIFE_PERIOD
  let t = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(numActivity)) / k)

  return t > 0 && isFinite(t) ? t : false
}
