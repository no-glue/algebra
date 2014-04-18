var primesieve = (function() {
  var Primesieve = function() {
    // gets prime numbers up to n, in parallel

    var root = this;

    root.spawn = function(cores, n, parallel) {
      // spawns workers to get primes

      var check = [];

      for(var i = 0; i < Math.floor(Math.sqrt(n)); i++) {
        // check for multiples of these
        check.push(i);
      }

      var part = Math.floor(n / cores);

      if(!parallel) parallel = require('paralleljs');

      var parallels = [];

      for(i = 0; i < cores; i++) {
        parallels.push(new parallel([i * part, (i + 1) * part, check]));

        parallels[i].spawn(function(range) {
          console.log('range>>>', range);

          return '';
        });
      }
    };
  };

  return new Primesieve();
})();

exports.primesieve = primesieve;
