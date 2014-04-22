var algos = require('./algos');

var deferred = algos.stdin.get();

deferred.then(function(arg) {
  var json = arg.interpret.getJson(arg.text);

  var algo = algos[json.algo];

  if(algo.deferred) {
    var deferredAgain = algo[json.method].apply(algo, json.params);

    deferredAgain.then(function(arg) {
      console.log('arg>>>', arg);
    });
  } else {
    var out = algo[json.method].apply(algo, json.params);

    console.log('arg>>>', out);
  }
});
