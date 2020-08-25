const env = require('./env-config.js')

module.exports = {
  presets: ['next/babel', '@zeit/next-typescript/babel'],
  plugins: [
    ['transform-define', env],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
}