var Command = require('../lib/command'),
  exampleCommand = new Command

exampleCommand.signature('build {--switch|s}')
exampleCommand.description = 'Example 2'

exampleCommand.handle = function () {
  this.error(this.option('switch'))
}

module.exports = exampleCommand