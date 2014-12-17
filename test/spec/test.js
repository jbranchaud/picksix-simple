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

      it('should only remove one item at a time when duplicates exist in an array', function() {
        var arr = [1,2,3,2,4,2];
        assert.equal(arr.length, 6);
        arr.removeItem(2);
        assert.equal(arr.length, 5);
        arr.removeItem(2);
        assert.equal(arr.length, 4);
        assert.equal(arr.toString(), [1,3,4,2].toString());
      });

    });

  });

})();
