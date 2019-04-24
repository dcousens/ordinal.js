var test = require('tape')
var ordinal = require('../')
var fixtures = require('./fixtures.json')

test('returns ordinal numbers', function (t) {
  fixtures.forEach(function (x) {
    t.equal(ordinal(x.i), x.ordinal, x.i + ' === ' + x.ordinal)
  })

  t.end()
})

test('returns negative ordinal numbers', function (t) {
  fixtures.forEach(function (x) {
    x.i === 0
      ? t.equal(ordinal(x.i), x.ordinal, x.i + ' === ' + x.ordinal)
      : t.equal(ordinal(-x.i), '-' + x.ordinal, x.i + ' === ' + x.ordinal)
  })

  t.end()
})

test('returns special numbers', function (t) {
  [Infinity, -Infinity].forEach(function (i) {
    t.equal(ordinal(i), i, i + ' === ' + i)
  })

  t.end()
})

test('returns not numbers numbers', function (t) {
  [NaN, -NaN].forEach(function (i) {
    t.ok(isNaN(ordinal(i)), i + ' is a "not a number"')
  })

  t.end()
})

test('throws on non-numbers', function (t) {
  t.throws(function () {
    ordinal('foo')
  }, /Expected Number, got string foo/)
  t.end()
})
