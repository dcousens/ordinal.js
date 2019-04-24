var indicator = require('./indicator')
var specialNumbers = [Infinity, -Infinity, NaN, -NaN]

function ordinal (i) {
  if (typeof i !== 'number') throw new TypeError('Expected Number, got ' + (typeof i) + ' ' + i)

  if (specialNumbers.indexOf(i) !== -1) {
    return i
  }
  return i + indicator(i)
}

ordinal.indicator = indicator
module.exports = ordinal
