#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("Type type");

shell.exec("git add -A && git commit -a -m 'testtests'");

shell.exec("git push origin master --force");

shell.exec("Commit Success!");