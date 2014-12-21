// # storage.js
//
// the browser storage functionality for PickSix
//
// ## Dependencies:
// 
// - js/helper.js

(function() {

  var storage = {};

  // if this is a non-null object, stringify it, otherwise return the
  // value
  function convertToStorableValue(value) {

    if( value !== null && typeof value === 'object' ) {
      return JSON.stringify(value);
    }

    return value;

  }

  // set
  //
  // This function adds an entry to the localStorage store with the given
  // key and value. It returns true if the action was successful.
  storage.set = function( key, value ) {

    window.localStorage.setItem(key, convertToStorableValue(value));

    return true;

  };

  // get
  //
  // This function retrieves the value from the localStorage store that
  // cooresponds to the given key if that key is in keys.
  storage.get = function( key ) {

    var value = window.localStorage.getItem(key);
    try {
      // if parsing fales, just return the value as is
      return JSON.parse(value);
    }
    catch(e) {
      return value;
    }

  }

  // remove
  //
  // This function removes an entry from the localStorage store that
  // cooresponds to the given key if that key is in keys. It returns true
  // if the action was successful, otherwise false.
  storage.remove = function( key ) {

    window.localStorage.removeItem(key);
    return true;

  };

  window.app = window.app || {};
  window.app.storage = storage;

})();
