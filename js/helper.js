// helper.js
//
// a collection of helper and convenience functions for PickSix

(function() {

  /** Array Extensions **/

  // Array Remove - By John Resig (MIT Licensed)
  // http://ejohn.org/blog/javascript-array-remove/
  Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
  };

  // Array Remove Item
  // http://davidwalsh.name/remove-item-array-javascript
  Array.prototype.removeItem = function(item) {
    var index = this.indexOf(item);
    if( index !== -1 ) {
      return this.splice(index, 1);
    }
    return null;
  };

  /** end of Array Extensions **/

})();
