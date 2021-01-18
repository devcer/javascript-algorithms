function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let noOfFactors = 0,
    minPerimeter = Number.MAX_VALUE;
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      let perimeter = 2 * (N / i + i);
      minPerimeter = Math.min(perimeter, minPerimeter);
    }
  }
  return minPerimeter;
}

console.log(solution(30));
console.log(solution(1));

