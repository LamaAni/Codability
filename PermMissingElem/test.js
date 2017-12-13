// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    // sumup.
    var sumA=0;
    var sumI=0;
    for(var i=0;i<A.length;i++)
    {
        sumA+=A[i];
        sumI+=i+1;
    }

    sumI+=i+1; // the last item.
    return sumI-sumA;
}
var arr=[1,3,4,5];
console.log(solution(arr));
var arr=[1,2,4,5];
console.log(solution(arr));
var arr=[2,3,4,5];
console.log(solution(arr));
var arr=[1,2,3,5];
console.log(solution(arr));
var arr=[1,2,3,4];
console.log(solution(arr));