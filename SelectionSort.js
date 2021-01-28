function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i],
      index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < elem) {
        elem = arr[j];
        index = j;
      }
    }
    if (elem !== arr[i]) {
      arr[index] = arr[i];
      arr[i] = elem;
    }
  }
  return arr;
}
// Selection Sort Time complexity-	Ω(n)	θ(n^2)	O(n^2)
// space - O(1)
console.log(sort([14, 33, 27, 10, 35, 19, 42, 44]));
console.log(sort([3, 2, 1, 4]));
