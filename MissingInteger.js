function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4);
  let map = {};
  for (let index = 0; index < A.length; index++) {
    const element = A[index];
    map[element] = true;
  }
  for (let index = 1; index < Number.POSITIVE_INFINITY; index++) {
      if(map[index] === undefined)
        return index;
  }
}
console.log(solution([1, 2, 3]));
console.log(solution([1, 3, 6, 4, 1, 2]));
