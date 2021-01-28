Array.prototype.myfilter = function (func) {
  let arr = this;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// let newArr = [1, 2, 3, 4, 5, 6, 7, 8].filter((x) => x % 2 === 0);
let newArr = [1, 2, 3, 4, 5, 6, 7, 8].myfilter((x) => x % 2 === 0);
console.log(newArr);
