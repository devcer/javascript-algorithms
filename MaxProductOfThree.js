  function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // if size is less than 3, no triplet exists
    let n = A.length;
    if (n < 3) return -1;
    let max1 = A[0], max2 = -1, max3 = -1, min1 = A[0], min2 = -1;
    for(let i = 1; i < n; i++) {
      if(A[i] > max1) {
        max3 = max2;
        max2 = max1;
        max1 = A[i];
      } else if(max2 === -1 || A[i] > max2) {
        max3 = max2;
        max2 = A[i];
      } else if( max3 === -1 ||   A[i] > max3) {
        max3 = A[i];
      }
      if(A[i] < min1) {
        min2 = min1;
        min1 = A[i];
      } else if(min2 === -1 || A[i] < min2) {
        min2 = A[i];
      }
    }
    console.log(max1, max2, max3, min1, min2);
    let prod1 = max1 * max2 * max3, prod2 = max1 * min1 * min2;
    return Math.max(prod1, prod2);
  }
console.log(solution([-3, -2, -16, -20, -25]));
