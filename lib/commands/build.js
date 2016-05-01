import elements from 'elements'
import program from 'commander'
import comet from 'CometJS'
import builder from 'builder.js'

program
  .command('build <app> <build-type>', 'Specify Comet app and build type.')
  .option('-i', '--ices' 'Insert ices build')
  .option('-u', '--update', 'Update a build')
  .parse(process.argv);

