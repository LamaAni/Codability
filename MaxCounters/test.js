// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var curMax=0;
    var curCounter=0;
    var hash={}; // hastable to hold current results;
    for(var i=0;i<A.length;i++)
    {
        var maxCountersOP=A[i] < 1 || A[i] >N;
        if(maxCountersOP)
        {
            curCounter=curMax;
            hash={};
            continue; // nothing to do .
        }

        var key=A[i]+"";
        if(hash[key]==null)
            hash[key]=curCounter;
        hash[key]+=1;

        // find max value.
        if(curMax<hash[key])
            curMax=hash[key];
    }

    // checking all operations.
    var rslt=[];
    for(var i=0;i<N;i++)
    {
        var key=(i+1)+"";
        rslt[i]=hash[key]!=null ? hash[key] : curCounter;
    }

    return rslt;
}
x=5;
arr=[3,4,4,x+1,1,4,4];
console.log(solution(x,arr).join(","));
arr=[];
console.log(solution(x,arr).join(","));
x=10;
arr=[3,4,4,x+1,1,4,4];
console.log(solution(x,arr).join(","));

