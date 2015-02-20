var Pizza = {

  setDiameter: function(diameterInput) {
    this.diameter = diameterInput;
  },

  setTopping: function(toppingInput) {
    this.topping = toppingInput;
  },

  slices: function() {
    if (this.diameter >= 16) {
      return 16;
    } else if (this.diameter >= 14) {
      return 12;
    } else if (this.diameter >= 12) {
      return 8;
    } else if (this.diameter >= 9.5) {
      return 6;
    } else {
      return 4;
    }
  }

};

$("form#pizza-order").submit(function(event) {
  var pizzaOrder = Object.create(Pizza);
  pizzaOrder.setDiameter(parseFloat($("input#size").val()));
  pizzaOrder.setTopping($("select#topping").val());

  alert(pizzaOrder.diameter + " " + pizzaOrder.topping + " " + pizzaOrder.slices());

  event.preventDefault();
});
