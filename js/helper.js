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


  /** jQuery Substitutes **/

  var $ = {};

  // Add the class name to the element
  // http://youmightnotneedjquery.com/#add_class
  $.addClass = function(element, className) {
    if( element.classList ) {
      element.classList.add(className);
    }
    else {
      element.className += ' ' + className;
    }
  };

  // Remove the class name from the element
  // http://youmightnotneedjquery.com/#remove_class
  $.removeClass = function(element, className) {
    if( element.classList ) {
      element.classList.remove(className);
    }
    else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

  /** end of jQuery Substitutes **/

  window.app = window.app || {};
  window.app.$ = $;

})();
