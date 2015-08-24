#!/usr/bin/env node
/* eslint-disable no-nested-ternary */
'use strict';
var meow = require('meow');
var supportsColor = require('supports-color');

var cli = meow({
	help: [
		'Usage',
		'  $ supports-color [--<256|16m>]',
		'',
		'Options',
		'  --256   Check for 256 color support',
		'  --16m   Check for 16 million color support (True Color)',
		'',
		'Examples',
		'  $ supports-color',
		'  $ supports-color --256',
		'  $ supports-color --16m',
		'',
		'Exits with code 0 if color is supported and 1 if not'
	]
});

var flags = cli.flags;
var level = flags['256'] ? 'has256' : flags['16m'] ? 'has16m' : 'hasBasic';

process.exit(supportsColor[level] ? 0 : 1);
