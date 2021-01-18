function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let map = {};
  A.forEach(element => {
      map[element] = 1;
  });
  for(let i = 1; i <= A.length; i++) {
      if(map[i] === undefined) {
          return 0;
      }
  }
  return 1;
}
console.log(solution([4, 1, 3, 2]));
console.log(solution([4, 1, 3]));
