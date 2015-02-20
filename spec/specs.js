describe('Pizza', function() {

  it('sets the pizza size property', function() {
    var testPizza = Object.create(Pizza);
    testPizza.setSize(13);
    expect(testPizza.size).to.equal(13);
  });

  it('sets the pizza topping property', function() {
    var testPizza = Object.create(Pizza);
    testPizza.setTopping("pepperoni");
    expect(testPizza.topping).to.equal(pepperoni);
  });
});
