describe('Pizza', function() {

  var testPizza;

  beforeEach(function() {
    testPizza = Object.create(Pizza);
  });

  it('sets the pizza diameter property', function() {
    testPizza.setDiameter(13);
    expect(testPizza.diameter).to.equal(13);
  });

  it('sets the pizza topping property', function() {
    testPizza.setTopping("pepperoni");
    expect(testPizza.topping).to.equal("pepperoni");
  });

  it('returns the correct number of slices for a 16" pizza', function() {
    testPizza.setDiameter(16);
    expect(testPizza.slices()).to.equal(16);
  });

});
