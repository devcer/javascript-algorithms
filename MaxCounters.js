function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let counters = Array(N).fill(0),
    max = 0;
  for (let index = 0; index < A.length; index++) {
    const element = A[index];
    if (element <= N) {
      counters[element - 1] += 1;
      max = Math.max(max, counters[element - 1]);
    } else {
      counters.fill(max);
    }
  }
  return counters;
}
console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
