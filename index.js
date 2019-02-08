var chalk = require("chalk");

var message = "Hello " + chalk.blue.italic.bgRedBright("World");
console.log(message);