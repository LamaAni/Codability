// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 6.4.0)
    // edge cases
    return Math.floor(B/K)-Math.floor(A/K)+(A%K==0 ? 1 : 0);
    // if(A==B)
    //     return 0;
    // if(K==B)
    //     return 1;
    
    // // split to cases.
    // if(K>A)
    // {
    //     // case where K is in between A and B;
    //     return Math.floor(B/K); // no chance we are hiding any numbers below k
    // }

    
}

//console.log(solution(2,10,3));
console.log(solution(0,0,11));
console.log(solution(1,1,11));
console.log(solution(7,10,3));

