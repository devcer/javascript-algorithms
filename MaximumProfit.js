function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let min = A[0],
    maxProfit = 0;
  for (let index = 1; index < A.length; index++) {
    const element = A[index];
    maxProfit = Math.max(element - min, maxProfit);
    min = Math.min(element, min);
  }
  return maxProfit;
}
console.log(solution([23171, 21011, 21123, 21366, 21013, 21367]));
console.log(solution([2, 3, 10, 6, 4, 8, 1]));
console.log(solution([7, 9, 5, 6, 3, 2]));
