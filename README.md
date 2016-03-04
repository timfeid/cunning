# cunning js
CLI commands

## Installation
`npm install cunning`

## Usage

### To create a cunning instance with commands:
```js
var cunning = require('cunning')

// Add commands
cunning.kernel.commands = [
  // See below to see what your-command.js has
  require('./your-command')
]

// Start the program
cunning.handle()
```

### your-command.js

```js
Command = require('cunning/command')
  , cmd = new Command

cmd.signature('welcome {--switch|s : Switchable switch} {argument : argument1}')
cmd.description = "A welcoming command"
cmd.handle = function () {
  this.info('Your argument reads:')
  this.success(this.argument('argument'))
}

module.exports = cmd
```