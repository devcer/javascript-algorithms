function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let map = {};
    A.forEach(element => {
        if (map[element] === 1) {
            map[element] = 0;
        } else if(typeof map[element] === "undefined" || map[element] === 0) {
            map[element] = 1;
        }
    });
    
    for (const key in map) {
        if (map.hasOwnProperty(key)) {
            const element = map[key];
            if(element !== 0) {
                return key;
            }
        }
    }
}
console.log(solution([9, 3, 9, 3, 9, 7, 9]));