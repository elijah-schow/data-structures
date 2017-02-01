var Stack = function() {
  var newStack = {};
  newStack.sizeProperty = 0;
  newStack.storage = {};
  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.sizeProperty++;
  this.storage[this.sizeProperty] = value;
};

stackMethods.pop = function(){
  var result = this.storage[this.sizeProperty];
  delete this.storage[this.sizeProperty];
  this.sizeProperty = Math.max(this.sizeProperty - 1, 0);
  return result;
};

stackMethods.size = function(){
  return this.sizeProperty;
};
