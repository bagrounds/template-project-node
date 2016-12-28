;(function () {
  'use strict'

  /* imports */
  var funTest = require('fun-test')
  var funAssert = require('fun-assert')

  /* exports */
  module.exports = [
    testStub()
  ]

  function testStub () {
    var test = funTest({
      verifier: function verifier (error, result) {
        funAssert.falsey(error)
      },
      sync: true
    })

    test.description = 'Should pass'

    return test
  }
})()

