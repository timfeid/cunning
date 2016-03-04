# cunning js
CLI commands

## Installation
`npm install cunning`

## Usage

### To create a cunning instance with commands:
```js
#!/usr/bin/env node

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

### From command line

#### Available Commands
type `$ bin-name`, you'll see the output:
```
 Available commands
   welcome  A welcoming command
```

#### Missing argument(s)
type `$ bin-name welcome`, you'll see the output:
```
Missing required argument

Usage: welcome [options] <argument>

Options ---
(--switch|-s): Switchable switch

Arguments ---
<argument>: argument1
```

#### Successful
type `$ bin-name welcome bob`, you'll see the output:
```
Your argument reads:
bob
```
