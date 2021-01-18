function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 3) return 0;

  A.sort((a,b) => a-b);
  for (let i = 0; i < A.length - 2; i++) {
    if (A[i] + A[i + 1] > A[i + 2]) return 1;
  }
  return 0;
}
console.log(solution([10, 2, 5, 1, 8, 20]));
console.log(solution([10, 50, 5, 1]));
console.log(solution([10, 50]));
