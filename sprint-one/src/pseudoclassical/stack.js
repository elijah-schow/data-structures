var Stack = function() {
  this.storage = {};
  this.sizeProp = 0;
};

Stack.prototype.push = function(value) {
  this.sizeProp++;
  this.storage[this.sizeProp] = value;
};

Stack.prototype.pop = function() {
  var result = this.storage[this.sizeProp];
  delete this.storage[this.sizeProp];
  if (this.sizeProp > 0) {
    this.sizeProp--;
  }
  return result;
};

Stack.prototype.size = function() {
  return this.sizeProp;
};
