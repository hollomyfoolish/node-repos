const path = require('path');
module.exports = {
    entry: './antlr4-wrapper.js',
    mode: 'development',
    target: 'web',
    node: {
        fs: 'empty'
      },
    output: {
      filename: './target/antlr4-bundle.js',
      globalObject: 'window'
    }
  }