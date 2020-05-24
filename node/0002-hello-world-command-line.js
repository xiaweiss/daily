#!/usr/bin/env node'use strict';

/*
    The command line arguments are stored in the `process.argv` array,
    which has the following structure:
    [0] The path of the executable that started the Node.js process
    [1] The path to this application
    [2-n] the command line arguments
    Example: [ '/bin/node', '/path/to/yourscript', 'arg1', 'arg2', ... ]
    src: https://nodejs.org/api/process.html#process_process_argv
*/

// Store the first argument as username.
var username = process.argv[2];

// Check if the username hasn't been provided.
if(!username){
  // Extract the filename
  var appName = process.argv[1].split(require('path').sep).pop();

  // Give the user an example on how to use the app.
  console.error('Missing argument! Example: %s YOUR_NAME', appName);

  // Exit the app (success: 0, error: 1).
  // An error will stop the execution chain. For example:
  // ./app.js && ls -> won't execute ls
  // ./app.js David && ls -> will execute ls
   process.exit(1);
}

// Print the message to the console.
console.log('Hello %s!', username);
