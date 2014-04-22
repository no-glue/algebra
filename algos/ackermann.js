var ackermann = (function() {
  var Ackermann = function() {
    var root = this;

    root.get = function(a, b) {
      // gets value
      if(!a) return b + 1;

      if(a && !b) return root.get(a - 1, 1);

      return root.get(a - 1, root.get(a, b - 1));
    };
  };

  return new Ackermann();
})();

module.exports = ackermann;