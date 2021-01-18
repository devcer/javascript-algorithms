// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let noOfFactors = 0;
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      if (N / i === i) noOfFactors++;
      else noOfFactors += 2;
    }
  } 
  return noOfFactors;
}

console.log(solution(24));
