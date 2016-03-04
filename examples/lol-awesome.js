var Command = require('../command'),
  cmd = new Command

cmd.signature('lol:awesome')
cmd.description = 'Make some awesomeness happen'

cmd.handle = function () {
  this.info('This is awesome, right?')
}

module.exports = cmd