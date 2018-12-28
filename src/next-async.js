(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxAsync = nx.declare('nx.Async', {});

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxAsync;
  }
})();
