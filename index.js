function indicator (i) {
  var cent = i % 100
  if (cent >= 10 && cent <= 20) return 'th'
  var dec = i % 10
  if (dec === 1) return 'st'
  if (dec === 2) return 'nd'
  if (dec === 3) return 'rd'
  return 'th'
}

function ordinal (i) {
  if (typeof i !== 'number') throw new TypeError('Expected Number, got ' + (typeof i) + ' ' + i)
  return i + indicator(i)
}

ordinal.indicator = indicator

module.exports = ordinal
