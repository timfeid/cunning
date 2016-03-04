var chalk = require('chalk')
, io = module.exports = {}

io._verbosityLevel = 0

io.output = function (string, color, verbosity) {
  verbosity = verbosity || 0
  color = color || 'cyan'

  if (verbosity >= this._verbosityLevel) {
    console.log(chalk[color](string))
  }
}

io.in = function () {

}