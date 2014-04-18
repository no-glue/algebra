var stdin = (function() {
  var Stdin = function() {
    // reads from standard input
    var root = this;

    root.get = function() {
      // gets chunks from standard input
      var read = process.stdin;

      var chunks = [];

      var deferred = require('assure')();

      read.resume();

      read.setEncoding('utf8');

      read.on('data', function(chunk) {
        chunks.push(chunk);
      });

      read.on('end', function() {
        deferred.resolve({interpret: root, text: chunks.join()});
      });

      return deferred;
    };

    root.getJson = function(text) {
      // gets json
      return JSON.parse(text);
    };
  };

  return new Stdin();
})();

module.exports = stdin;