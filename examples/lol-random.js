var Command = require('../command'),
  cmd = new Command

cmd.signature('lol:random')
cmd.description = 'Call some randomness'

cmd.handle = function () {
  this.error('Uh oh, couldn\'t find anything random here')
}

module.exports = cmd