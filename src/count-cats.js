const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  if (!Array.isArray(array) || !array.length) return false

  let count = 0
  const newArray = array.reduce((acc, el) => acc.concat(el), [])

  for (const arrayElement of newArray) {
    if (arrayElement === '^^') {
      count += 1
    }
  }

  return count
};
