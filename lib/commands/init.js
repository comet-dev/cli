import elements from 'elements'
import program from 'commander'
import comet from 'CometJS'
var template = require('../template');

const files = template.getElementsByName('');

program
  .command('init <app>', 'Initialize Comet App with template')
  .option('-w', '--watch', 'Watch template for updates')
  .parse(process.argv);
