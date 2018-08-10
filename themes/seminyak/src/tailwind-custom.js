const base = require('./tailwind-base')

/**
 * Customize Tailwind base configuration.
 * @see https://tailwindcss.com/docs/fonts
 * @see https://fonts.google.com/specimen/Oswald?selection.family=Oswald|Raleway
 */
const oswald = ['Oswald', 'sans-serif']
const raleway = ['Raleway', 'sans-serif']
base.fonts['oswald'] = oswald
base.fonts['raleway'] = raleway

base.opacity['15'] = '.15'

module.exports = base
