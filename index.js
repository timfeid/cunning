#!/usr/bin/env node

'use strict'

var cunning = require('./lib')

cunning.kernel.commands = [
  require('./examples/command'),
  require('./examples/lol-random'),
  require('./examples/lol-awesome'),
  require('./examples/build')
]

cunning.handle()