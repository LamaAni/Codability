// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    for(var i=Math.floor(Math.sqrt(N));i>1;i--)
    {
        if(N%i!=0)
            continue;
        var a=i;
        var b=N/i;
        if(a*b==N)
            return 2*(a+b);
    }

    return 2*(N+1);
}

var n=101;
console.log(solution(n));
var n=48;
console.log(solution(n));
var n=16;
console.log(solution(n));
var n=17;
console.log(solution(n));
var n=19;
console.log(solution(n));
