// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    var maxSoFar=0;
    var maxEndingHere=0;
    var minIdx=0;
    var maxIdx=0;
    var curMinIdx=0;
    for(var i=1;i<A.length;i++)
    {
        var delta=A[i]-A[i-1];
        if(delta > maxEndingHere+delta)
            curMinIdx=i-1;
        maxEndingHere = delta > maxEndingHere+delta ? delta : maxEndingHere+delta;
        if(maxEndingHere > maxSoFar)
        {
            minIdx=curMinIdx;
            maxIdx=i;
        }
        maxSoFar = maxEndingHere > maxSoFar ? maxEndingHere :maxSoFar;
    }

    return maxSoFar;
}

function nsol(A){
    var minIdx=0;
    var maxIdx=0;
    var maxProfit=0;
    for(var i=0;i<A.length;i++)
    {
        for(var j=1;j<i;j++)
        {
            if(A[i]-A[j]>maxProfit)
            {
                maxIdx=i;
                minIdx=j;
                maxProfit=A[i]-A[j];
            }
        }
    }

    return maxProfit;
}

var arr=[1000000, 4000, 2000, 5000, 0];
console.log(nsol(arr),solution(arr));

var arr=[23171, 21011, 21123, 21366, 21013, 21367];
console.log(nsol(arr),solution(arr));