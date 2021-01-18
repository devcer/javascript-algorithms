function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  let numFishes = A.length;
  if (numFishes === 0) return 0;
  let fishScore = [];
  for (let i = 0; i < A.length; i++) {
    if (B[i] === 1) {
      fishScore.push(A[i]);
    } else {
      while (fishScore.length !== 0) {
        if (A[i] < fishScore[fishScore.length - 1]) {
          numFishes--;
          break;
        } else if (A[i] > fishScore[fishScore.length - 1]) {
          numFishes--;
          fishScore.pop();
        }
      }
    }
  }
  return numFishes;
}
console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));
console.log(solution([4, 6, 2, 1,7], [0, 1, 0, 0,1]));
