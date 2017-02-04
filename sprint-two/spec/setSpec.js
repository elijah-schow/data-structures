describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should only contain unique values', function() {
    set.add('Elon Musk');
    set.add('Elon Musk');
    set.add('Jeff Bezos');
    set.add('Steve Jobs');
    expect(_.uniq(set._storage)).to.eql(set._storage);
  });

  it('should accept both numbers and strings', function() {
    set.add('Elon Musk');
    set.add('Elon Musk');
    set.add(4);
    set.add('Steve Jobs');
    set.add(2);
     set.add(2);
    expect(_.uniq(set._storage)).to.eql(set._storage);
  });

});
