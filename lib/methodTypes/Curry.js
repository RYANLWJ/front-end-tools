const curry = (func) => {
  var args = [].slice.call(arguments, 1);
  var self = this;
  return function () {
    var totalParams = args.concat([].slice.call(arguments, 0));
    if (func.length == totalParams.length) {
      return func.apply(this, totalParams);
    } else {
      totalParams.unshift(func);
      return curry.apply(self, totalParams);
    }
  };
};
const compose = (...fns) => (res) => fns.reduce((accum, next) => next(accum), res);
module.exports = {
  curry,
  compose,
};
