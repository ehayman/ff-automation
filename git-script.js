#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("git add -A");

shell.exec("echo 'test'");

shell.exec("git commit -m 'testtests'");

//shell.exec("git push origin master --force");