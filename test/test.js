function curry(fn) {
  let length = fn.length;
  let args = [];
  return function curryFn(...curryArgs) {
    args = args.concat(curryArgs);
    if (args.length > length) {
      throw new Error("arguments length error");
    }
    if (args.length === length) {
      return fn(...args);
    }
    return curryFn;
  };
}

let add = (a,b) => {
  return a+b
}

let res = curry(add)

res(1)(2)
console.log(res);