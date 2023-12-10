import Changelog from 'modules/changelog/Changelog';

/**
 * MAJOR - Major changes
 * MINOR - Will increment for each feature refactor or large changes to a feature
 * PATCH - Increment for small changes, bug fixes, UI changes.
 */

export const ChangelogList = [
    new Changelog('1.0.1', new Date(), '',
        {
            added: [
                'Added Sidebar',
                'Added Changelog',
            ],
            changed: ['Code improvements'],
        }
    ),
    new Changelog('1.0.0', new Date('2023-11-22'), 'Initial Release',
        {
            added: ['Initial Release'],
        }
    ),
];
