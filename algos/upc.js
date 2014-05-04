var upc = (function() {
  var Upc = function() {
    var root = this;

    root.valid = function(number) {
      // checks if upc is valid
      var mult = [3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1], sum = 0;

      for(var i = 0, len = number.length; i < len; i++) sum += number[i] * mult[i];

      return (!(sum % 10)) ? true : false;
    }
  };

  return new Upc();
})();

module.exports = upc;