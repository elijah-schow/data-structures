var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.sizeProp = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.sizeProp++;
  this.storage[this.sizeProp] = value;
}

stackMethods.pop = function(){
  var result = this.storage[this.sizeProp];
  delete this.storage[this.sizeProp];
  this.sizeProp = Math.max(this.sizeProp - 1, 0);
  return result;
}

stackMethods.size = function(){
  return this.sizeProp;
}
