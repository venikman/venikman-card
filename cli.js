#!/usr/bin/env node
'use strict';
const meow = require('meow');
const chalk = require('chalk');
const enquirer = require('enquirer');
const opn = require('opn');

const lib = require('lib')({ token : 'XVYmO6ZbSVvZOUkdZolAf5xXppdcNwZz5KOL2UIbSPrOA6IY94dGy79aNH-WJbNC' });

const sms = lib.venikman.sms['@dev'];

meow(`
Usage
$ venikman
`);

const start = async () => {
    const chooseLinks = {
        type    : 'select',
        name    : 'answer',
        message : chalk.green('Hi! I am venikman.'),
        choices : [...['Here is my website', 'Here is my twitter', 'Here is my github', 'Use stdlib FAAS', 'Send me SMS'].map((choise) => {
            return chalk.red(choise);
        }), 'Quit']
    };
    const answerChooseLinks = await enquirer.prompt(chooseLinks);
    return answerChooseLinks;
};

// eslint-disable-next-line promise/prefer-await-to-then
start().then(async (res) => {
    if (res.answer.includes('twitter')) {
        opn('https://twitter.com/venik_man');
    }
    if (res.answer.includes('github')) {
        opn('https://github.com/venikman');
    }
    if (res.answer.includes('website')) {
        opn('https://nedbailov.com');
    }
    if (res.answer.includes('FAAS')) {
        const stdlib = await lib.venikman.sms['@dev']({ name : 'testName' });
        console.log(stdlib);
    }
    if (res.answer.includes('SMS')) {
        const smsForm = {
            name    : 'form',
            type    : 'form',
            message : 'Please provide your information:',
            choices : [
                { name    : 'name',
                    message : 'Yout name',
                    initial : 'name...' },
                { name    : 'message',
                    message : 'Sms text',
                    initial : 'tell me something' }
            ]
        };
        const answer = await enquirer.prompt(smsForm);
        const { name, message } = answer.form;
        try {
            const re = await sms(name, message);
            console.log(re);
        }
        catch (error) {
            console.log('We got problem to send a Message.');
        }
    }
    process.exit();
});
