var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  var result = false;
  _.each(this._storage, function(value){
  	if(_.isEqual(value, item)){
  		result = true;
  	}
  });
  return result;
};

setPrototype.remove = function(item) {
  return this._storage.splice(this._storage.indexOf(item), 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add: O(n)
 * contains: O(n)
 * remove: O(n)
 */
