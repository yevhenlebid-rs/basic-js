const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  const dreamTeam = members
    .reduce((acc, member) => acc + (typeof member === 'string' ? member : '')
      .trim()
      .slice(0, 1)
      .toUpperCase(), '')

  return dreamTeam.split('').sort().join('')
}
