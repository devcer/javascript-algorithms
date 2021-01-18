function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
let sum = a => b => c => a+b+c;

// console.log(add(5)(4)(3));
// console.log(sum(5)(4)(3));

// We can see a clear pattern, will solve it recursively
function sumFn(a) {
    return function (b) {
      if (b) {
        return sumFn(a+b); // it takes an argument and return a function which again can take an argument.
      }
      return a; // it will keep on adding 1+2+3+4..
    }
  };
console.log(sumFn(5)(4)(3)());
