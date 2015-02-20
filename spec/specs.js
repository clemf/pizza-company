describe('Pizza', function() {

  it('sets the pizza diameter property', function() {
    var testPizza = Object.create(Pizza);
    testPizza.setDiameter(13);
    expect(testPizza.diameter).to.equal(13);
  });

  it('sets the pizza topping property', function() {
    var testPizza = Object.create(Pizza);
    testPizza.setTopping("pepperoni");
    expect(testPizza.topping).to.equal("pepperoni");
  });

  it('returns the correct number of slices for a 16" pizza', function() {
    var testPizza = Object.create(Pizza);
    testPizza.setDiameter(16);
    expect(testPizza.slices()).to.equal(16);
  });
  
});
