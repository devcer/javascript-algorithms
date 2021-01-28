Array.prototype.mymap = function (func) {
    let arr = this;
    let newArr = [];
    for(let i = 0; i< arr.length; i++) {
        newArr.push(func(arr[i]));
    }
    return newArr;
};
// let newArr = [1, 2, 3].map((x) => x * 2);
// console.log(newArr);
let newArr = [1, 2, 3].mymap((x) => x * 2);
console.log(newArr);