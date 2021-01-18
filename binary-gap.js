    function solution(N) {
        // write your code in JavaScript (Node.js 8.9.4)
        const bin = N.toString(2);
        console.log(bin);
        let zeroCount = 0, maxZeroCount = 0, checkZero = false;
        for(let i = 0; i < bin.length; i++) {
            zeroCount = 0
            while (bin.charAt(i) === "0") {
                ++zeroCount;
                ++i;
            }
            if(bin.charAt(i) === "1")
                maxZeroCount = Math.max(zeroCount, maxZeroCount)        
        }
        return maxZeroCount;
    }
console.log(solution(1041));
