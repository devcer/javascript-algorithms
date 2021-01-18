const ep = 0.00001;

function distance(x, y) {
  return Math.sqrt((x * x) + (y * y));
}

function isEqualDistance(x1, y1, x2, y2) {
  return Math.abs(distance(x1, y1) - distance(x2, y2)) < ep;
}

function solution(S, X, Y) {
  let arr = [];
  let map = new Map();
  let answer = 0;

  for (let i = 0; i < X.length; i++) {
    arr[i] = i;
  }

  arr.sort((a, b) => distance(X[a], Y[a]) - distance(X[b], Y[b]));

  for (let i = 0; i < arr.length; i++) {
    const ch = S[arr[i]];
    if (map.has(ch)) {
      map.forEach((idx, key) => {
        if (isEqualDistance(X[idx], Y[idx], X[arr[i]], Y[arr[i]])) {
          answer--;
        }
      });
      break;
    }
    map.set(ch, arr[i]);
    answer++;
  }
  return answer;
}
console.log(solution("ABDCA", [2, -1, -4, -3, 3], [2, -2, 4, 1, -3]));
console.log(solution("ABB", [1, -2, -2], [1, -2, 2]));
