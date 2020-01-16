#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("git add -A");

shell.exec("echo 'Changes added'");

shell.exec("git commit -m 'testtests'");

shell.exec("echo 'Changes commited'");

//shell.exec("git checkout -b meow5");

shell.exec("echo 'New branch'");

shell.exec("git push -u origin meow5");

shell.exec("echo 'Pushed'");

shell.exec("curl -XPOST -d `{'title':'i am title text', 'base':'master', 'head':'meow5', 'body':'i am body text'}` \ https://api.github.com/repos/ff-automation/pulls");

shell.exec("echo 'Make PR'");

//shell.exec("git push origin master --force");