var HashTable = function() {
  this._limit = 8;
  this._filled = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  //Handle Collisions
  if (bucket) {
    bucket.push([k, v]);
  } else {
    this._storage.set(index, [[k, v]]);
  }
  this._filled++;
  if(this.percentFilled() > 75){
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var result;
  if (bucket) {
    if (bucket.length === 1) {
      result = bucket[0][1];
    } else {
      _.each(bucket, function(item) {
        if (item[0] === k) {
          result = item[1];
        }
      });
    }
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
  this._filled--;
  if(this.percentFilled() < 25){
    this.resize(this._limit / 2);
  }
};

HashTable.prototype.resize = function(limit) {
  var resized;
  limit = Math.round(limit);
  resized = LimitedArray(limit);
  this._storage.each(function(array){
    _.each(array, function(tuple){
      var index = getIndexBelowMaxForKey(tuple[0], limit);
      resized.set(index, resized[index] || []);
      resized.get(index).push([tuple[0], tuple[1]]);
    });
  });
  this._storage = resized;
  this._limit = limit;
};

HashTable.prototype.percentFilled = function(){
  return this._filled / this._limit * 100;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(1)
 * retrieve: if no collisions = O(1), else O(n)
 * remove: O(1)
 * getIndexBelowMaxForKey: O(n)
 */
