var io = require('./lib/io')
  , Command = require('mandator/prototype')
  , stylesToColors = {
    info: 'cyan',
    success: 'green',
    error: 'red'
  }

var signature = Command.prototype.signature

Command.prototype.handle = function () {
}

Command.prototype.signature = function (sig) {
  var regex = /^\s*([\w\-_:]+)/
    , match = sig.match(regex)

  if (!match) {
    throw new InvalidSignature(sig)
  }

  signature.call(this, sig.replace(regex, ''))
  this.name = match[1]
}

for (var style in stylesToColors) {
  color = stylesToColors[style]
  Command.prototype[style] = (function (color) {
    return function (string, verbosity) {
      io.output(string, color, verbosity)
    }
  })(color)
}

module.exports = Command