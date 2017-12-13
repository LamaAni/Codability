// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
var A=[];
function solution(A, K) {
    // write your code in JavaScript (Node.js 6.4.0)
    if(K==0 || A.length==1 ||K==A.length)
        return A;

    // any full rotation should be ignored therefore
    if(K>A.length)
        K=K%A.length;

    // rotating = split the array.
    var starter=A.splice(A.length-K);
    A=starter.concat(A);
    return A;
}

function speedTest(f,vals,n)
{
    started=new Date();
    for(var i=0;i<n;i++)
        f.apply(global,vals);
    return ((new Date()).getTime()-started.getTime())/n;
}
// helpers.
var arr=[3, 8, 9, 7, 6];
console.log(solution(arr,0));
var arr=[3, 8, 9, 7, 6];
console.log(solution(arr,1));
var arr=[3, 8, 9, 7, 6];
console.log(solution(arr,2));
var arr=[3, 8, 9, 7, 6];
console.log(solution(arr,3));
var arr=[3, 8, 9, 7, 6];
console.log(solution(arr,4));
var arr=[3, 8, 9, 7, 6];
console.log(solution(arr,5));
var arr=[3, 8, 9, 7, 6];
console.log(solution(arr,6));
// console.log("Compleated in "+speedTest(solution,[arr],100000));
// console.log(fasterSolution(arr));
// console.log("Compleated in "+speedTest(fasterSolution,[arr],100000));