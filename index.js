#!/usr/bin/env node

const chokidar = require('chokidar');

chokidar.watch('.')
  .on('add', () => console.log('File added'))
  .on('change', () => console.log('File changed'))
  .on('unlink', () => console.log('File unlinked'))