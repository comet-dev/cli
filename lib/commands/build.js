#!/usr/bin/env node
/**
 * @constructor build.elements
 * @author mosesag0813
 * @this $program, builder.js
 **/

import elements from 'elements'
import cli from 'cli'
import comet from 'CometJS'
import builder from 'builder.js'

cli
  .option('-i', '--ices' 'Update ices build')
  .option('-u', '--update', 'Update a regular build')
  .parse(process.argv);

const ices = ices.call(".ices").update("0.0.5");
const update = update.call("").update();

module.exports = {
  export builder;
  export comet;
  export elements
}

new builder(program.on, program.build);

