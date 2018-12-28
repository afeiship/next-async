var nx = require('next-js-core2');
var NxAsync = require('../src/next-async');

test('test async functions', () => {
  var fns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => {
    return function(inOptions) {
      var timer = setTimeout(() => {
        inOptions.complete(timer);
      }, item * 10);
    };
  });
});
