#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("git add -A");

shell.exec("echo 'Changes added'");

shell.exec("git commit -m 'testtests'");

shell.exec("echo 'Changes commited'");

//shell.exec("git push origin master --force");