var Queue = function() {
  this.last = null;
  this.first = null;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  if (this.last === null || this.first === null) {
    this.first = 0;
    this.last = 0;
  } else {
    this.last++;
  }
  this.storage[this.last] = value;
};

Queue.prototype.dequeue = function() {
  var result;
  if (this.size() > 0) {
    result = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
  }
  if (this.size() < 1) {
    this.first = null;
    this.last = null;
  }
  return result;
};

Queue.prototype.size = function() {
  var result;
  if (this.last === null || this.first === null) {
    result = 0;
  } else {
    result = this.last - this.first + 1;
  }
  return result;
};
