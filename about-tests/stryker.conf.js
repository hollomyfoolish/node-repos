'use strict';

module.exports = (config) => {
  config.set({
    'mutator': 'javascript',
    'packageManager': 'npm',
    'reporters': ['html', 'clear-text', 'progress'],
    'testRunner': 'command',
    'transpilers': [],
    'coverageAnalysis': 'all',
    'mutate': ['src/*.js*']
  });
};
