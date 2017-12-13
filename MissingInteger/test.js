// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    if(A.length==1)
    {
        if(A[0]==1)
            return 2;
        return 1;
    }
    
    // write your code in JavaScript (Node.js 6.4.0)
    var hash={};
    var maxVal=null;
    for(var i=0;i<A.length;i++)
    {
        var key=A[i]+"";
        hash[key]=true;
        if(maxVal==null || maxVal<A[i])
            maxVal=A[i];
    }

    if(maxVal<1)
        return 1;

    // checking missing inside.
    for(var i=1;i<A.length;i++)
    {
        var key=i+"";
        if(hash[key]!=true)
            return i;
    }

    return maxVal+1;
}

var arr=[1, 2, 3, 20, 21, 22];
console.log(solution(arr));

var arr=[-20, -20, 1, 2, 4, 22];
console.log(solution(arr));

var arr=[1, 3, 6, 4, 1, 2];
console.log(solution(arr));

var arr=[-20,-30,1, 2,3,4];
console.log(solution(arr));