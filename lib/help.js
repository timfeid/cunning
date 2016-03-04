var io = require('./io')

var Help = function (commands) {
  this.commands = commands
  this.topLevel = []
  this.groups = {}
  this.offset = 3
  this.maxChars = 0

  this._separate()
}

Help.prototype._separate = function () {
  var pieces

  this.commands.forEach(function (command) {
    if (command.name.length > this.maxChars) {
      this.maxChars = command.name.length
    }
    pieces = command.name.split(':')
    if (typeof pieces[1] === 'undefined') {
      this.topLevel.push(command)
    } else {
      this._addToGroup(pieces[0], command)
    }
  }.bind(this))
}

Help.prototype._addToGroup = function (group, command) {
  if (group) {
    if (typeof this.groups[group] === 'undefined') {
      this.groups[group] = []
    }

    this.groups[group].push(command)
  }
}

Help.prototype._sort = function () {

}

Help.prototype._printGroup = function (group) {
  this._printCommands(this.groups[group], function (a, b) {
    return a.name[group.length + 1] > b.name[group.length + 1]
  })
}

Help.prototype._printCommands = function (commands, sorter) {
  sorter = sorter || function (a, b) {
    return a.name[0] > b.name[0]
  }

  commands.sort(sorter).forEach(function (command) {
    var string = ' '.repeat(this.offset)
    string += command.name
    string += ' '.repeat(this.maxChars - command.name.length + 2)
    string += command.description
    io.output(string, 'green')
  }.bind(this))
}

Help.prototype.output = function () {
  io.output(' Available commands', 'yellow')

  this._printCommands(this.topLevel)

  for (var group in this.groups) {
    io.output(' ' + group, 'yellow')
    this._printGroup(group)
  }
}

module.exports = Help