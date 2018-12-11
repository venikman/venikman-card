#!/usr/bin/env node
'use strict';
const meow = require('meow');
const chalk = require('chalk');
const enquirer = require('enquirer');
const opn = require('opn');

meow(`
	Usage
	  $ venikman
`);

const start = async () => {
    const chooseLinks = {
        type    : 'select',
        name    : 'answer',
        message : chalk.green('Hi! I am venikman.'),
        choices : [...['Here is my website', 'Here is my twitter', 'Here is my github'].map((choise) => {
            return chalk.red(choise);
        }), 'Quit']
    };
    const answerChooseLinks = await enquirer.prompt(chooseLinks);
    return answerChooseLinks;
};

// eslint-disable-next-line promise/prefer-await-to-then
start().then((res) => {
    if (res.answer.includes('Here is my twitter')) {
        opn('https://twitter.com/venik_man');
    }
    if (res.answer.includes('Here is my github')) {
        opn('https://github.com/venikman');
    }
    if (res.answer.includes('Here is my website')) {
        opn('https://nedbailov.com');
    }
    process.exit();
});
