function solution(S) {
  let totalACount = S.split("").filter((x) => x === "a").length;
  let firstgap = 0;
  let secondgap = 0;
  let count = 0;

  if (totalACount % 3) return 0;
  if (totalACount === 0) {
    const n = S.length;
    return ((n - 2) * (n - 1)) / 2;
  }

  const firstMatch = totalACount / 3;
  const secondMatch = firstMatch * 2;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "a") count++;
    if (count === firstMatch) firstgap++;
    if (count === secondMatch) secondgap++;
  }

  return firstgap * secondgap;
}

console.log(solution("babaa"));
console.log(solution("ababa"));
console.log(solution("aba"));
console.log(solution("bbbbb"));
