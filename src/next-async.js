(function () {

  var global = global || window || self || this;
  var nx = global.nx || require('next-js-core2');

  var NxAsync = nx.declare('nx.Async', {
    statics: {
      parallel: function (inTasks, inCallback) {
        var tasks = inTasks || [];
        var callback = inCallback || nx.noop;
        var count = tasks.length;
        var results = [];

        tasks.forEach(function (task, index) {
          task(function (err, data) {
            results[index] = data;
            if (err) {
              callback && callback(err);
              callback = null;
            }
            if (--count === 0 && callback) {
              callback(null, results);
            }
          });
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxAsync;
  }

}());
