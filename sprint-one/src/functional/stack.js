var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    someInstance[size] = value;
  };

  someInstance.pop = function() {
    var result = someInstance[size];
    delete someInstance[size];
    size = Math.max(size - 1, 0);
    return result;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
