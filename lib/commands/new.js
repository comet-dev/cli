import elements from 'elements'
import program from 'commander'
import comet from 'CometJS'
import generator from '../lib/cli/generate'
import inquirer from 'inquirer'
var ices = require('.ices')
var appCom = {
  name:""
  ice: ".ices",
};


program
  .command('new <appName>', 'Start a new Comet app')
  .option('-d, --dependencies', 'Set your dependencies')
  .option('-p', '--package', 'Create a Comet package')
  .parse(process.argv);
  
var NewApp = new appCom;  
const dp = set 'dependencies';

if('dependencies' === true){
  dp.getElementById('');
}
const inquirer = dp.prompt('Set PATH and ices');

for(var path = "PATH"; path > dp.length; path++){
  path.push(NewApp.name +'/'+NewApp.ice) && path.generate(NewApp);
}

generation = function(app){
  /**
   *@constructor app, appName
   *@this generateNew
   *@alias app.create  
   */
  var generateNew = app.push(app);
  app.generator({
    min: './comet.min.js',
    develop: './develop.js',
    ic: '.ices',
    json: 'package.json'
  });
  app.createElement('components');
  app.getElementById('')
};

module.exports = {
  export app;
  export generation('NewApp');
  export dp;
  export generator;
  export program;
}
  
