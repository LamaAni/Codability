// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var totalLocationsFound=0;
    var leafOn={}; // hashtable for the leaves.
    for(var i=0;i<A.length;i++)
    {
        var key=A[i]+"";
        if(leafOn[key]==true)
            continue;
        leafOn[key]=true;
        totalLocationsFound+=1;

        if(totalLocationsFound==X)
            return i;
    }

    return -1;
}

var arr=[1,3,1,4,2,3,5,4];
console.log(solution(5,arr));