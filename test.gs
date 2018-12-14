var WEBHOOK_URL = PropertiesService.getScriptProperties().getProperty('WEBHOOK_URL')
var exports = WEBHOOK_URL ? GASUnit.slack(WEBHOOK_URL).exports : GASUnit.exports
var assert = GASUnit.assert

function runTests () {
  test_array()
  test_string()
}

function test_array () {
  exports({
    'Array': {
      '#indexOf()': {
        'should return -1 when not present': function () {
          assert([1, 2, 3].indexOf(4) === -1)
        },
        'should return the index when present': function () {
          assert([1, 2, 3].indexOf(3) === 2)
        }
      }
    }
  })
}

function test_string () {
  exports({
    'String': {
      '#indexOf()': {
        'should return -1 when not present': function () {
          assert('abc'.indexOf('d') === -1)
        },
        'should return the index when present': function () {
          assert('abc'.indexOf('c') === 2)
        }
      }
    }
  })
}