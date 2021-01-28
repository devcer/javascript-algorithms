function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let index = i;
    while (arr[index] < arr[index-1] && index > 0) {
      let temp = arr[index];
      arr[index] = arr[index-1];
      arr[index-1] = temp;
      index -= 1;
    }
  }
  return arr;
}
// Insertion Sort Time complexity-	Ω(n)	θ(n^2)	O(n^2)
// space - O(1)
console.log(sort([14, 33, 27, 10, 35, 19, 42, 44]));
console.log(sort([3, 2, 1, 4]));
