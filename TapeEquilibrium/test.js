// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)

    var splits=A.length-1;
    var maxDiff=null;

    // since we are starting at max sum.
    var rightSum=0;
    var leftSum=A[0];
    for(var i=1;i<A.length;i++)
        rightSum+=A[i];

    for(var i=1;i<=splits;i++)
    {
        var diff=Math.abs(leftSum-rightSum);
        if(maxDiff==null || diff<maxDiff)
            maxDiff=diff;
        rightSum-=A[i];
        leftSum+=A[i];
    }

    return maxDiff;
}

var arr=[3,1,2,4,3];
console.log(solution(arr));
// var arr=[1,2,4,5];
// console.log(solution(arr));
// var arr=[2,3,4,5];
// console.log(solution(arr));
// var arr=[1,2,3,5];
// console.log(solution(arr));
// var arr=[1,2,3,4];
// console.log(solution(arr));