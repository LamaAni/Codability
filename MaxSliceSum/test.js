// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var max=A[0];
    var maxEndingHere=A[0];
    for(var i=1;i<A.length;i++)
    {
        maxEndingHere=Math.max(maxEndingHere+A[i],A[i]);
        max=Math.max(max,maxEndingHere);
    }
    return max;
}

var arr=[3, 2, -6, 4, 0] ;
console.log(solution(arr));