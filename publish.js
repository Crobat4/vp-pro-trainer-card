/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const ghpages = require('gh-pages');
const { version } = require('./package.json');

console.info('Starting publish..');

ghpages.publish('docs', {
    src: ['**/*', '../README.md'],
    branch: 'master-bak4',
    dest: 'docs',
    message: `[v${version}] Live website`,
}, (err) => {
    if (err) {
        console.error('Something went wrong publishing...\n', err);
    } else {
        console.info('Successfully published repo to GitHub pages!');
    }
});