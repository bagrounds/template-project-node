;(function () {
  'use strict'

  /* imports */
  var funTest = require('fun-test')
  var funAssert = require('fun-assert')

  /* exports */
  module.exports = [
    {
      error: funAssert.falsey,
      sync: true
    }
  ].map(funTest)
})()

