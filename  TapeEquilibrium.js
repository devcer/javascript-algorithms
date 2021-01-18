/*
A non-empty zero-indexed array A consisting of N integers is given. Array A represents numbers on a tape.
Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
*/

function solution(A) {
    var sumRight = A.reduce((pv, cv, idx) => (idx > 0) ? (pv + cv) : (0), 0);
    var sumLeft = 0;
    var substractions = [];
    var maxI = A.length - 1;
    
    for(var i = 0; i < maxI; i += 1){
        sumLeft += A[i];
        substractions.push(Math.abs(sumLeft - sumRight));
        if (i + 1 <= maxI) sumRight -= A[i + 1];
    }
    
    return substractions.reduce((pv, cv, idx) => (idx > 0) ? ((pv < cv)? pv : cv) : (cv), 0);
}