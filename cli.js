#!/usr/bin/env node
import meow from 'meow';
import supportsColor from 'supports-color';

const cli = meow(`
	Usage
	  $ supports-color

	Options
	  --256  Check for 256 color support
	  --16m  Check for 16 million color support

	Examples
	  $ supports-color
	  $ supports-color --256
	  $ supports-color --16m

	Exits with code 0 if color is supported and 1 if not
`);

const {flags} = cli;
const level = flags['256'] ? 'has256' : (flags['16m'] ? 'has16m' : 'hasBasic');

process.exitCode = supportsColor[level] ? 0 : 1;
