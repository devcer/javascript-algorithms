function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let carsCount = 0,
    passingCars = 0;
  for (let index = A.length - 1; index >= 0; index--) {
    const element = A[index];
    if (element === 1) {
      carsCount++;
    } else {
      passingCars += carsCount;
      if(passingCars > 1000000000) {
        return -1;
      }
    }
  }
  return passingCars;
}
console.log(solution([0, 1, 0, 1, 1]));
