function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let maxSum = A[0], currentSum = 0;
  for (let index = 0; index < A.length; index++) {
      const element = A[index];
      currentSum += element;
      maxSum = Math.max(maxSum, currentSum);
      if(currentSum < 0) currentSum  = 0;
  }
  return maxSum;
}

console.log(solution([3, 2, -6, 4, 0]));
console.log(solution([-10]));
console.log(solution([-10, -1]));


