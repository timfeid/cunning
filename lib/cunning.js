var Kernel = require('./kernel')
  , Help = require('./help')

var Cunning = function () {
  var command = process.argv.splice(2, 1)
  this.command = command[0]
  this.kernel = new Kernel
}

Cunning.prototype.handle = function () {
  var index
    , command

  for (index in this.kernel.commands) {
    command = this.kernel.commands[index]
    if (this._commandMatches(command)) {

      return this._executeCommand(command)
    }
  }

  return this.help()
}

Cunning.prototype._executeCommand = function (command) {
  if (command.valid()) {
    return command.handle()
  } else {
    return command.help()
  }
}

Cunning.prototype._commandMatches = function (command) {
  return command.name === this.command
}

Cunning.prototype.help = function () {
  new Help(this.kernel.commands).output()
}

module.exports = Cunning