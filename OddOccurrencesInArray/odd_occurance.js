// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    // building hash.
    var ht={};
    for(var i=0;i<A.length;i++)
    {
        var key=A[i]+"";

        if(ht[key]==null)
            ht[key]=1;
        else ht[key]+=1;
    }

    for(var key in ht)
    {
        if(ht[key]%2!=0)
            return parseInt(key);
    }

    // should not be here. 
    return -1;
}

// the number of the var. 
function fasterSolution(A){
    var rslt=0;
    for(var n of A)
    {
        rslt^=n;
    }
    return rslt;
}

function speedTest(f,vals,n)
{
    started=new Date();
    for(var i=0;i<n;i++)
        f.apply(global,vals);
    return ((new Date()).getTime()-started.getTime())/n;
}
// helpers.

var arr=[9, 3, 9, 3, 9, 7, 9,7,7] ;
console.log(solution(arr));
console.log("Compleated in "+speedTest(solution,[arr],100000));
console.log(fasterSolution(arr));
console.log("Compleated in "+speedTest(fasterSolution,[arr],100000));

