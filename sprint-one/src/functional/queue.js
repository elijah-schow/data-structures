var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var first = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage[size + first - 1] = value;
  };

  someInstance.dequeue = function() {
    var result;
    if (size > 0) {
      result = storage[first];
      delete storage[first];
      first++;
      size--;
    }
    return result;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
