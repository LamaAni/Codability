// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var curZaroCount=0;
    var totalSum=0;
    for(var i=0;i<A.length;i++)
    {
        if(A[i]==0)
        {
            curZaroCount+=1;
        }
        else
        {
            totalSum+=curZaroCount;
        }

        if(totalSum>1000000000)
            return -1;
    }

    return totalSum;
}

arr=[0,1,0,1,1];
console.log(solution(arr));
arr=[0,1,0,0,1,1];
console.log(solution(arr));
arr=[1,1,1,0,1,0,1,1,0,0,0];
console.log(solution(arr));