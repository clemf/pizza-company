describe('Pizza', function() {

  it('sets the pizza size property', function() {
    testPizza = Object.create(Pizza);
    testPizza.setSize(13);
    expect(testPizza.size).to.equal(13);
  });

});
