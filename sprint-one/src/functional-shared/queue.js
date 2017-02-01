var Queue = function() {
  var newQueue = {};
  newQueue.storage = {};
  newQueue.sizeProp = 0;
  newQueue.first = 1;

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.sizeProp++;
  this.storage[this.first + this.sizeProp - 1] = value;
}

queueMethods.dequeue = function() {
  var result;
  if (this.sizeProp > 0) {
    result = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    this.sizeProp--;
  }
  return result;
}

queueMethods.size = function() {
  return this.sizeProp;
}
