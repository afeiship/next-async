(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var wx = global.wx;

  var NxWeappParallel = nx.declare('nx.WeappParallel', {
    statics: {
      map: {},
      mq: [],
      running: [],
      request: function(inOptions) {
        this.push(inOptions);
        this.next();
      },
      push: function(inOptions) {
        var options = inOptions || {};
        options.t = +new Date();
        while (this.mq.indexOf(options.t) > -1 || this.running.indexOf(options.t) > -1) {
          options.t += (Math.random() * 10) >> 0;
        }

        this.mq.push(options.t);
        this.map[options.t] = options;
      },
      next: function() {
        var self = this;
        if (this.mq.length === 0) return;
        if (this.running.length < this.MAX_REQUEST - 1) {
          var firstOne = this.mq.shift();
          var options = this.map[firstOne];
          var oldComplete = options.complete;
          options.complete = function() {
            self.running.splice(self.running.indexOf(options.t), 1);
            delete self.map[options.t];
            oldComplete && oldComplete.apply(options, arguments);
            self.next();
          };
          this.running.push(options.t);
          return wx.request(options);
        }
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappParallel;
  }
})();
