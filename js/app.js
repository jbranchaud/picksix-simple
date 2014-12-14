// app.js
//
// the main application file for PickSix

(function() {

  var items = [];

  // grab the static UI elements to work with
  var itemElements = document.querySelectorAll('#main .todo-item');
  var itemTitleElements = document.querySelectorAll('#main .todo-item .todo-item-text');
  var itemCheckboxElements = document.querySelectorAll('#main .todo-item .todo-item-checkbox');

  var initializeItems = function() {
    var items = [];
    for(var i = 0; i < 6; i++) {
      var item = {
        title: '',
        created_at: null,
        updated_at: null,
        complete: false,
        completed_at: null
      };
      items.push(item);
    }
    return items;
  };

  var initializeView = function(items) {
    Array.prototype.forEach.call(itemElements, function(el, i) {
      var itemTitle = el.querySelector('.todo-item-text');
      var itemCheckbox = el.querySelector('.todo-item-checkbox');
      itemTitle.innerHTML = items[i].title;
      itemCheckbox.checked = items[i].completed;
    });
  };

  // update the title of the item with the index corresponding with the given
  // id. The `id` should be an integer between 0 and 5, inclusive. The
  // `updated_at` value should be updated to the current datetime.
  var updateItemTitle = function(id, title) {
    // TODO: clean, sanitize title
    items[id].title = title;
    items[id].updated_at = Date.now();
  };

  // update the complete value of the item with the index corresponding with
  // the given id. The `id` should be an integer betwen 0 and 5, inclusive.
  // If `complete` is changing to false, then `completed_at` should be set
  // to null. If `complete` is changing to true, then `completed_at` should
  // be set to the current datetime.
  var updateItemCompletion = function(id, complete) {
    items[id].complete = complete;
    if( complete ) {
      items[id].completed_at = Date.now();
    }
    else {
      items[id].completed_at = null;
    }
  };

  var getItemId = function(itemElement) {
    return parseInt(itemElement.attributes['data-item-id'].value);
  };

  //                          //
  // Add Event Handlers to UI //
  //                          //

  var addItemTitleChangeEventHandlers = function() {
    Array.prototype.forEach.call(itemTitleElements, function(el, i) {
      el.addEventListener('blur', function(event) {
        var itemId = getItemId(event.target.parentElement);
        var item = items[itemId];
        var currentItemTitle = item.title;
        var updatedItemTitle = event.target.innerHTML;
        if( currentItemTitle !== updatedItemTitle ) {
          updateItemTitle(itemId, updatedItemTitle);
          if( item.created_at === null ) {
            item.created_at = item.updated_at;
          }
        }
      });
    });
  };

  var addItemCompleteChangeEventHandlers = function() {
    Array.prototype.forEach.call(itemCheckboxElements, function(el, i) {
      el.addEventListener('change', function(event) {
        var itemId = getItemId(event.target.parentElement);
        var checked = event.target.checked;
        updateItemCompletion(itemId, checked);
      });
    });
  };

  items = initializeItems();
  initializeView(items);
  addItemTitleChangeEventHandlers();
  addItemCompleteChangeEventHandlers();

  window.app = window.app || {};
  window.app.items = items;

})();
