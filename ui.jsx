'use strict';

/* eslint id-length: ["off"] */

const { h, Text } = require('ink');
const Gradient = require('ink-gradient');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = (url) => {
    return opn(url, { wait : false });
};

const handleSelect = (item) => {
    if (item.url) {
        open(item.url);
    }

    if (item.action) {
        item.action();
    }
};

const items = [
    {
        label : 'Website',
        url   : 'https://nedbailov.com'
    },
    {
        label : 'Twitter',
        url   : 'https://twitter.com/venik_man'
    },
    {
        label : 'GitHub',
        url   : 'https://github.com/venikman'
    },
    // TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
    {
        label : 'Quit',
        action() {
            process.exit(); // eslint-disable-line unicorn/no-process-exit
        }
    }
];

const ui = () => {
    return (
        <div>
            <Gradient colors={[{ r : 84,
                g : 255,
                b : 248,
                a : 0.7 }, { r : 8,
                g : 255,
                b : 141,
                a : 0.7 }]}
            >
                <Text>Hi I am venikman</Text>
            </Gradient>
            <br />
            <SelectInput items={items} onSelect={handleSelect} />
        </div>
    );
};
module.exports = ui;
