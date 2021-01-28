Array.prototype.myreduce = function (func) {
  let arr = this;
  let accum = 0;
  for (let i = 0; i < arr.length; i++) {
    accum = func(accum, arr[i]);
  }
  return accum;
};

// let result = [1, 2, 3].reduce((a, b) => a + b);
let result = [1, 2, 3].myreduce((a, b) => a + b);

console.log(result);
