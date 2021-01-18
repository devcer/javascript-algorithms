function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let stack = [];
    
    for (let index = 0; index < S.length; index++) {
        const char = S[index];
        if(char === '(') {
            stack.push(char);
        } else {
            if(stack[stack.length-1] === '(')
                stack.pop();
            else 
                return 0;
        }
    }
    if(stack.length === 0)
        return 1;
    return 0;
}

console.log(solution("(()(())())"));
console.log(solution("())"));
console.log(solution(")"));
console.log(solution("("));

