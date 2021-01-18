function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let map = {},
    uniqueCount = 0;
  A.forEach((element) => {
    if (map[element] === undefined) {
      map[element] = true;
      uniqueCount++;
    }
  });
  return uniqueCount;
}
console.log(solution([2, 1, 1, 2, 3, 1]));
