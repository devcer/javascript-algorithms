function solution(S, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let memLen = parseString(S).length;
    for (let i = 0; i < S.length - (K - 1); i++) {
        let subString = getSubstring(S, i, i + K - 1);
        memLen = Math.min(memLen, parseString(subString).length);
    }
    return memLen;
}

function getSubstring( S, begin,end) {
    let sb = "";
    for (let i = 0; i < S.length; i++) {
        if (i < begin || i > end) {
            sb += S[i];
        }
    }
    return sb;
}

function parseString(S) {
    let prevChar = S[0], newString = "", count = 1; 
    for (let index = 1; index < S.length; index++) {
        const char = S[index];
        if(char === prevChar) {
            count++;
        } else {
            if(count < 2) {
                newString += prevChar;
            } else {
                newString = newString + count + prevChar;
            }
            count = 1;
            prevChar = char;
        }
    }
    if(count < 2) {
        newString += prevChar;
    } else {
        newString = newString + count + prevChar;
    }
    return newString;
}

console.log(solution("ABBBCCDDCCC", 3));