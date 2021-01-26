function curry(fn, currArgs) {
  return function() {
    let args = [].slice.call(arguments);
    if(currArgs !== undefined) {
      args = args.concat(currArgs);
    }
    if(args.length < fn.length) {
      return curry(fn, args);
    }
    return fn.apply(null, args);
  }
}
function sum(a, b, c) {
  console.log(a + b + c);
}

const fn = curry(sum);

// fn(1, 2, 3); // 6
fn(3)(3)(1);