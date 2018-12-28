(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.async = function () {
    //code goes here.
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.async;
  }

}());
