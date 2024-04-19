import Changelog from 'modules/changelog/Changelog';

/**
 * MAJOR - Major changes
 * MINOR - Will increment for each feature refactor or large changes to a feature
 * PATCH - Increment for small changes, bug fixes, UI changes.
 */

export const ChangelogList = [
    new Changelog('1.1.2', new Date('2024-1-15'), '',
        {
            fixed: [
                'Font issues',
            ],
        }
    ),
    new Changelog('1.1.1', new Date('2024-1-15'), '',
        {
            added: [
                'All data are now saved when the tab/window is reloaded/closed',
                'Added Indigo Disk moves',
            ],
            changed: ['Styles improvements'],
        }
    ),
    new Changelog('1.1.0', new Date('2024-1-6'), 'Forms',
        {
            added: [
                'Pokémon Forms can now be selected',
                'Added Indigo Disk Pokémon (Archaludon - Pecharunt)',
            ],
        }
    ),
    new Changelog('1.0.1', new Date('2023-12-15'), '',
        {
            added: [
                'Added Dark mode',
                'Added Sidebar',
                'Added Changelog',
                'Added Credits',
            ],
            changed: ['Code improvements'],
            fixed: ['Screen breakpoints'],
        }
    ),
    new Changelog('1.0.0', new Date('2023-11-22'), 'Initial Release',
        {
            added: ['Initial Release'],
        }
    ),
];
