(function() {
  'use strict';

  const isThere = require('is-there');
  const path    = require('path');

  /**
   * Checks whether a directory is a git repository or not
   * @param  {String}  dir [path to git repository]
   * @return {Boolean}
   */
  function isGit(dir) {
    let gitDir = path.join(dir, '.git');

    return isThere(gitDir);
  }

  module.exports = exports = isGit;
})();
