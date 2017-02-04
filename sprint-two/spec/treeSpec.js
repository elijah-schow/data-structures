describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should return true if children exist', function() {
    tree.addChild(4);
    tree.addChild(3);
    tree.addChild(2);
    expect(tree.hasChildren()).to.equal(true);
  });

  it('should return false if children do not exist', function() {
    expect(tree.hasChildren()).to.equal(false);
  });

  it('should have a methods named "removeFromParent" and a property named "parent"', function() {
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.hasOwnProperty('parent')).to.equal(true);
  });

  it('should have a reference to its parent', function(){
    tree.addChild(5);
    expect(tree.children[0].parent).to.equal(tree);
  });
  
  it('should dissasociate a child from its parent and vice versa', function(){
    var child;
    tree.addChild(5);
    child = tree.children[0];
    child.removeFromParent();
    expect(child].parent).to.equal(null);
    expect(tree.contains(5)).to.equal(false);
  });

  //TODO: write test:
    // Implement a .traverse() method on tree. .traverse() should accept a callback
    // and execute it on every value contained in the tree
});
