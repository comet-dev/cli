import app from 'app'
import elements from 'elements'
import program from 'commander'
import comet from 'CometJS'
import generator from '../lib/generator/new'
import inquirer from 'inquirer'
var newApp = {
  elements: "CometJS",
  ices: ".ices",
  
};

program
  .command('new <appName>', 'Start a new Comet app')
  .option('-d, --dependencies', 'Set your dependencies')
  .option('-p, --package, '')
  .parse(process.argv)
  
const dp = set 'dependencies'
if('dependencies' === true){
  dp.getElementById('');
}
const inquirer = dp.prompt('Set PATH of ices');
if(inquirer === "./"){
  
}


  
