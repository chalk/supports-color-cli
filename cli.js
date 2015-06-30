#!/usr/bin/env node
'use strict';
var meow = require('meow');
var supportsColor = require('supports-color');

meow({
	help: [
		'Example',
		'  $ supports-color',
		'',
		'Exits with code 0 if color is supported and 1 if not'
	]
});

process.exit(supportsColor ? 0 : 1);
