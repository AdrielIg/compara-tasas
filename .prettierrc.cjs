/** @type {import("prettier").Config} */
module.exports = {
  // i am just using the standard config, change if you need something else
  ...require('prettier-config-standard'),
  // pluginSearchDirs: [__dirname],
  plugins: [
    require.resolve('prettier-plugin-astro'),
    'prettier-plugin-tailwindcss',
  ],
  semi: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        printWidth: 80,
      },
    },
  ],
};
