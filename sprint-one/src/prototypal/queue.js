var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.first = null;
  obj.last = null;
  obj.storage = {};
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  if (this.last === null || this.first === null) {
    this.last = 0;
    this.first = 0;
  } else {
    this.last++;
  }
  this.storage[this.last] = value;
}

queueMethods.dequeue = function () {
  var result;
  if (this.size() > 0) {
    result = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
  }

  return result;
}

queueMethods.size = function () {
  var result;
  if (this.first === null || this.last === null) {
    result = 0;
  } else {
    result = this.last - this.first + 1;
  }
  return result;
}
