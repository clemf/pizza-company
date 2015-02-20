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
    }
  }

};
