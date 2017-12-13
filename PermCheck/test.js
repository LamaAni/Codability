// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var hash={};
    for(var i=0;i<A.length;i++)
    {
        var key=A[i]+"";
        if(hash[key]!=null)
            return 0;

        hash[key]=1;
    }
    
    if(hash["1"]!=1)
    {
        return 0;
    }

    for(var i=0;i<A.length;i++)
    {
        var key=(i+1)+"";
        if(hash[key]!=1)
            return 0;
    }
    return 1;
}

var arr=[5,2,3,4];
console.log(solution(arr));

var arr=[3,1,2,4];
console.log(solution(arr));

var arr=[4,1,3,2,5,7,6,8];
console.log(solution(arr));

var arr=[4,1,3,2,8];
console.log(solution(arr));