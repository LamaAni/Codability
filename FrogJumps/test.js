// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 6.4.0)
    if(Y==X)
        return 0;
        
    // leftovers ;
    var jumps=Math.ceil((Y-X)/D);

    return jumps;
}