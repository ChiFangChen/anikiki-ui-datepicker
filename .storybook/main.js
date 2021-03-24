module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.tsx"
  ],
  "addons": [{
    name: '@storybook/addon-essentials',
    options: {
      actions: false,
      backgrounds: false,
    }
  }]
}
