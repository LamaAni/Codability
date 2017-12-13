// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function findMinSum(len,A)
{
    var sum=0;
    
    var i;
    for(i=0;i<len;i++)
    {
        sum+=A[i];
    }

    var minSum=sum;
    for(i;i<A.length;i++)
    {
        sum+=A[i]-A[i-len];
        if(sum<minSum)
            minSum=sum;
    }

    return sum;
}

function solution(K, M, A) {
    // write your code in JavaScript (Node.js 6.4.0)

    // edge one.
    if(K>=A.length) // maximal sum will be maximal element. takes care of A.length=1;
        return M; 
    
    var minSumLen=Math.floor(A.length/K);
    var maxSumLen=A.length;
    var minSum=findMinSum(minSumLen,A);
    while(minSumLen>maxSumLen-1)
    {
        var newLen=(minSumLen+maxSumLen)/2;
        var sum=findMinSum(newLen,A);
        if(sum<minSum)
        {
            minSumLen=newLen;
            minSum=sum;
        }
        else
        {
            maxSumLen=newLen;
        }
    }

    return minSum;
}

var arr=[2, 1, 5, 1, 2, 2, 2];
var K=3;var M=5;
console.log(solution(K,M,arr));