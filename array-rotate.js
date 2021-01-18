// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length === 0) return A;
    while(K > 0) {
        A.unshift(A.pop());
        K--;
    }
    return A;
}
console.log(solution([3, 8, 9, 7, 6], 3));