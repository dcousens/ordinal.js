var indicator = require('./indicator')

function ordinal (i, options) {
  if (typeof i !== 'number') throw new TypeError('Expected Number, got ' + (typeof i) + ' ' + i)
  var suffix = indicator(i)

  return options && options.suffixOnly ? suffix : i + suffix
}

ordinal.indicator = indicator
module.exports = ordinal
