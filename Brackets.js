function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let stack = [],
    pairs = {
      "{": "}",
      "[": "]",
      "(": ")",
    };
  for (let index = 0; index < S.length; index++) {
    const element = S[index];
    if (element === "{" || element === "(" || element === "[") {
      stack.push(element);
      continue;
    }  
    if(stack.length === 0) return 0;

    if (element !== pairs[stack.pop()]) {
      return 0;
    }
  }
  return stack.length === 0 ?  1: 0;
}
console.log(solution("{[()()]}"));
