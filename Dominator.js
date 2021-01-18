function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let map = {},
    requiredLength = Math.floor(A.length / 2) + 1;
  for (let index = 0; index < A.length; index++) {
    const element = A[index];
    if (map[element] === undefined) {
      map[element] = [index];
    } else {
      map[element].push(index);
    }
    if (map[element].length >= requiredLength) {
      return index;
    }
  }
  return -1;
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3, 2]));
