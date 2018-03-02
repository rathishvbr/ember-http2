'use strict';

var http2 = require('http2');

module.exports = {
  name: 'ember-http2',

//   init() {
//   this._super.init && this._super.init.apply(this, arguments);
// },
//
// included() {
//   this._super.included.apply(this, arguments);
//   this.import('vendor/http2.js');
// },
//
// treeForVendor(vendorTree) {
//   var http2Tree = new Funnel(path.join(this.project.root, 'node_modules', 'http2'), {
//     files: ['index.js'],
//   });
//
//   return new MergeTrees([vendorTree, http2Tree]);
// },

init() {
  this._super.init && this._super.init.apply(this, arguments);

  this._debugTree = BroccoliDebug.buildDebugCallback('ember-http2');
},

_shouldCompileJS() {
  return true;
},

treeForAddon(tree) {
  let lodashPath = path.dirname(require.resolve('http2'));

  let lodashTree = this._debugTree(lodashPath, 'input');

  lodashTree = replace(lodashTree, {
    files: ['*.js'],
    pattern: {
      match: /\.js/g,
      replacement: ''
    }
  });

  lodashTree = this._debugTree(lodashTree, 'post-extension-replace');

  lodashTree = new Funnel(lodashTree, {
    getDestinationPath(path) {
      // if (path === 'lodash.js') {
      //   return 'index.js';
      // }

      return path;
    }
  });


  if (tree) {
    tree = mergeTrees([lodashTree, tree], {
      overwrite: true
    });
  } else {
    tree = lodashTree;
  }

  return this._super.treeForAddon.call(this, tree);
}






};
