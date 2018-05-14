#!/usr/bin/env node
'use strict';
const meow = require('meow');
const importJsx = require('import-jsx');
const {h, render} = require('ink');

const ui = importJsx('./index');

meow(`
	Usage
	  $ venikman
`);

render(h(ui));
