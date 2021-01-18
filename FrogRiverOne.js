function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let map = {},
    len = A.length;
  for (let second = 0; second < len; second++) {
    let val = A[second];
    if (val > X) continue;
    if (map[val] === undefined || second < map[val]) {
      map[val] = second;
    }
  }
  console.log(map);
  let maxSeconds = 0;
  for (let index = 1; index < X + 1; index++) {
    const element = map[index];
    if(element === undefined) {
        return -1;
    } else {
        maxSeconds = Math.max(maxSeconds, element);
    }
  }
  return maxSeconds;
}
console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
