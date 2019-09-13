(function() {
  'use strict';

  const assert  = require('assert');
  const isGit   = require('../index');

  describe('is-git', () => {
    describe('this module directory', () => {
      it('should return true', () => {
        assert.equal(true, isGit(process.cwd()));
      });
    });

    describe('root of operating system', () => {
      it('should return false', () => {
        assert.equal(false, isGit('/'));
      });
    });
  });

})();
