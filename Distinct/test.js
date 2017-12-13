// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var hash={};
    for(var i=0;i<A.length;i++)
    {
        var key=A[i]+"";
        hash[key]=true;
    }

    return Object.keys(hash).length;
}

var arr=[2,1,1,2,3,1];
console.log(solution(arr));