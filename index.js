'use strict';

var path = require('path');

module.exports = {
  name: 'ember-http2',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
  this._super.included(app);
  // this.app.import(app.bowerDirectory + '/remarkable/dist/remarkable.js');
  this.app.import('node_modules/remarkable/dist/remarkable.js');
  this.app.import('vendor/ember-http2/shim.js', {
   type: 'vendor',
   exports: { 'http2': ['default'] }
 });
}
};
