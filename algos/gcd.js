var gcd = (function() {
  var Gcd = function() {
    var root = this;

    root.get = function(a, b) {
      // gets gcd of a and b
      if (a < 0) a = -a;
      if (b < 0) b = -b;
      if (b > a) {var temp = a; a = b; b = temp;}
      while (true) {
          a %= b;
          if (a == 0) return b;
          b %= a;
          if (b == 0) return a;
      }
    }
  };

  return new Gcd();
})();

module.exports = gcd;