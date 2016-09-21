import elements from 'elements';
import cli from 'cli';
import comet from 'CometJS';
var template = require('.../template');
var folder = require('')

const files = template.getElementsByName('');

cli
  .command('init <app>', 'Initialize Comet App with template')
  .option('-w', '--watch', 'Watch template for updates')
  .parse(process.argv);

if(instanceof folder('.../').addTo('repository')){
  
}  

  
