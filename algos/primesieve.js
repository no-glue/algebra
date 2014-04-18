var primesieve = (function() {
  var Primesieve = function() {
    // gets prime numbers up to n, in parallel

    var root = this;

    root.spawn = function(cores, n, parallel, assure) {
      // spawns workers to get primes
      var check = [];

      for(var i = 0; i < Math.floor(Math.sqrt(n)); i++) {
        // check for multiples of these
        check.push(i);
      }

      var part = Math.floor(n / cores);

      if(!parallel) parallel = require('paralleljs');

      if(!assure) assure = require('assure');

      var deferred = assure();

      var complete = 0;

      var primes = [];

      var parallels = [];

      for(i = 0; i < cores; i++) {
        parallels.push(new parallel([i * part, (i + 1) * part, check]));

        parallels[i].spawn(function(range) {
          var from = range.shift();

          var to = range.shift();

          var check = range.shift();

          var numbers = [];

          while(from < to) numbers.push(from++);

          for(var i = 0, len = check.length; i < len; i++) {
            var toCheck = check[i];

            for(var j = 0, lenNumbers = numbers.length; j < lenNumbers; j++) {
              if(!(numbers[j] % toCheck)) {numbers.splice(j, 1);}
            }
          }

          return numbers;
        }).then(function(numbers) {
          // add numbers
          primes = primes.concat(numbers);

          complete++;

          if(complete === cores) deferred.resolve(primes);
        });
      }

      return deferred;
    };
  };

  return new Primesieve();
})();

module.exports = primesieve;