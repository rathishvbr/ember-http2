'use strict';

const getChannelURL = require('ember-source-channel-url');

module.exports = {
    return {
      scenarios: [
        {
          name: 'default',
          bower: {
            dependencies: { }
          }
        },
        {
          name: 'ember-3.0.0',
          bower: {
            dependencies: {
              'ember': '~3.0.0'
            },
            resolutions: {
              'ember': '~3.0.0'
            }
          }
        },
        {
          name: 'ember-release',
          bower: {
            dependencies: {
              'ember': 'components/ember#release'
            },
            resolutions: {
              'ember': 'release'
            }
          }
        },
        {
          name: 'ember-beta',
          bower: {
            dependencies: {
              'ember': 'components/ember#beta'
            },
            resolutions: {
              'ember': 'beta'
            }
          }
        },
        {
          name: 'ember-canary',
          bower: {
            dependencies: {
              'ember': 'components/ember#canary'
            },
            resolutions: {
              'ember': 'canary'
            }
          }
        }
      ]
    };
};
