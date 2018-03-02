/* eslint-env node */
module.exports = {
  afterInstall: function() {
    return this.addPackageToProject('http2');
  }
};
