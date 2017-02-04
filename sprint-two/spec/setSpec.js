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
    expect([
        'Elon Musk',
        'Jeff Bezos',
        'Steve Jobs'
      ]).to.eql(set._storage);
  });

  it('should accept both numbers and strings', function() {
    set.add('Elon Musk');
    set.add('Elon Musk');
    set.add(4);
    set.add('Steve Jobs');
    set.add(2);
    set.add(2);
    expect([
        'Elon Musk',
        4,
        'Steve Jobs',
        2
      ]).to.eql(set._storage);
  });

  it('should accept objects of any type', function() {
    set.add('Elon Musk');
    set.add('Elon Musk');
    set.add(4);
    set.add('Steve Jobs');
    set.add(2);
    set.add(2);
    set.add({
      'name' : 'socks',
      'color' : 'red'
    });
    set.add({
      'name' : 'socks',
      'color' : 'red'
    });
    set.add({
      'name' : 'socks',
      'color' : 'blue'
    });
    set.add({
      'name' : 'socks',
      'color' : 'blue'
    });
    expect([
        'Elon Musk',
        4,
        'Steve Jobs',
        2,
        {
          'name' : 'socks',
          'color' : 'red'
        },
        {
          'name' : 'socks',
          'color' : 'blue'
        }
      ]).to.eql(set._storage);
  });

});
