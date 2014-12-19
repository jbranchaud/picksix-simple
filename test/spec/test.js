/* global describe, it */

(function () {
  'use strict';

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

    describe('Array.prototype.remove', function() {

      it('should be able to remove an item by index from an array', function() {
        var arr = ['a','b','c'];
        arr.remove(1);
        assert.equal(arr.toString(), ['a','c'].toString());
      });

    });

  });

  describe('storage.js', function() {

    var storage = app.storage;

    describe('storage.set', function() {

      it('should be able to store string values in localStorage', function() {
        storage.set('hello', 'world');
        storage.set('pick', 'six');

        assert.equal(window.localStorage.getItem('hello'), 'world');
        assert.equal(window.localStorage.getItem('pick'), 'six');
      });

      it('should be able to store number values in localStorage', function() {
        storage.set('one', 1);
        storage.set('millions', 4583000);

        assert.equal(window.localStorage.getItem('one'), 1);
        assert.equal(window.localStorage.getItem('millions'), 4583000);
      });

      it('should be able to store boolean values in localStorage', function() {
        storage.set('truthy', true);
        storage.set('falsy', false);

        assert.equal(window.localStorage.getItem('truthy'), true);
        assert.equal(window.localStorage.getItem('falsy'), false);
      });

      it('should be able to store JSON objects in localStorage', function() {
        var simpleObject = {
          hello: "world",
          one: 1,
          truthy: true
        };
        var complexObject = {
          data: {
            v1: 1,
            v2: 2,
            v3: 3
          },
          config1: 'always',
          config2: true,
          numbers: [1,2,3,4,5]
        };

        storage.set('object1', simpleObject);
        storage.set('object2', complexObject);

        var simpleObjectFromStorage = JSON.parse(window.localStorage.getItem('object1'));
        assert.equal(simpleObjectFromStorage.hello, simpleObject.hello);
        assert.equal(simpleObjectFromStorage.truthy, simpleObject.truthy);

        var complexObjectFromStorage = JSON.parse(window.localStorage.getItem('object2'));
        assert.equal(complexObjectFromStorage.data.v3, complexObject.data.v3);
        assert.equal(complexObjectFromStorage.numbers[2], complexObject.numbers[2]);
      });

    });

  });

})();
