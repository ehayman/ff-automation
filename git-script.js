#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("git add -A");

shell.exec("echo 'Changes added'");

shell.exec("git commit -m 'testtests'");

shell.exec("echo 'Changes commited'");

shell.exec("git checkout -b meow4");

shell.exec("echo 'New branch'");

shell.exec("git push -u origin meow4");

shell.exec("echo 'Pushed'");

shell.exec("curl -XPOST -d \ https://api.github.com/repos/ff-automation/pulls");

shell.exec("echo 'Make PR'");

//shell.exec("git push origin master --force");