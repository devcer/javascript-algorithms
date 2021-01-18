function solution(x) {
  setTimeout(() => {
    return new Promise((resolve, reject) => {
      resolve(x * x);
    });
  }, 3000);
}
function bar() {
  return [1, 2, 3, 4].map(solution);
}
console.log(bar());
