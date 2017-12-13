// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    if(A.length<1)
        return -1;
    // write your code in JavaScript (Node.js 6.4.0)
    var cnt=1;
    var current=A[0];
    var dominIdx=0;
    for(var i=1;i<A.length;i++)
    {
        if(A[i]==current)
        {
            cnt+=1;
        }
        else if(cnt>0)
            cnt-=1;
        else
        {
            cnt=1;
            current=A[i];
        }
    }
    cnt=0;
    for(var i=0;i<A.length;i++)
    {
        if(A[i]==current)
        {
            dominIdx=i;
            cnt+=1;
        }
    }

    return cnt>A.length/2 ? dominIdx : -1;
}

var arr=[3,4,3,2,3,-1,3,3];
console.log(solution(arr));