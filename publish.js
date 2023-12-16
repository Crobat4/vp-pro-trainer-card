/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const ghpages = require('gh-pages');
const { version } = require('./package.json');

const fs = require('fs');

// destination will be created or overwritten by default.

const files = ['README.md', 'package.json', '.gitignore', '.github'];
files.map((file) => {
    fs.cp(file, `dist/${file}`, {recursive: true}, (err) => {
        if (err) {
            throw err;
        }
        console.info(`${file} was copied to destination`);
    });
});

/*
console.info('Starting publish..');

ghpages.publish('dist', {
    branch: 'master-bak15',
    message: `[v${version}] Live website`,
    dotfiles: true,
}, (err) => {
    if (err) {
        console.error('Something went wrong publishing...\n', err);
    } else {
        console.info('Successfully published repo to GitHub pages!');
    }
});
*/
