// @flow weak

import minimist from 'minimist';
import Mocha from 'mocha';
import glob from 'glob';

const argv = minimist(process.argv.slice(2), {
  alias: {
    c: 'component',
    g: 'grep',
  },
});

const mocha = new Mocha({
  grep: argv.grep ? argv.grep : undefined,
  reporter: 'dot',
});

glob(`src/**/${argv.component ? argv.component : '*'}.spec.js`, {}, (err, files) => {
  files.forEach((file) => mocha.addFile(file));

  mocha.run((failures) => {
    process.on('exit', () => {
      process.exit(failures); // eslint-disable-line no-process-exit
    });
  });
});
