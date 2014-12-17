/* global describe, it */

(function () {
  'use strict';

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {

      });
    });
  });

  describe('helper.js', function() {

    describe('Array.prototype.removeItem', function() {

      it('should be able to remove an existing item from an array', function() {
        var arr = [1,2,3,4,5];
        assert.equal(arr.removeItem(3), 3, 'should remove and return the given value');
        assert.equal(arr.removeItem(5), 5, 'should remove and return the given value');
        assert.equal(arr.toString(), [1,2,4].toString(), 'the array should exclude the removed values');
      });

      it('should return null when removing a non-existing item from an array', function() {
        var arr = [1,2,3,4,5];
        assert.equal(arr.removeItem(6), null, 'should return null');
        arr.removeItem(1);
        assert.equal(arr.removeItem(1), null, 'should return null');
      });

    });

  });

})();
