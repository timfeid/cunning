var Command = require('../lib/command'),
  exampleCommand = new Command

exampleCommand.signature('command {uno}')
exampleCommand.description = 'Example 1'

exampleCommand.handle = function () {
  this.info(this.argument('uno'))
}

module.exports = exampleCommand