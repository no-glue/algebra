var algos = require('./algos');

algos.primesieve.spawn(2, 1000).then(function(arg) {
  console.log('arg>>>', arg);
});
