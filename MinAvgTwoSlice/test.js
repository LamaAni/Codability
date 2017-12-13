// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var min_idx=0;
    var min_val=null;
    // checking two and three.
    for(var i=0;i<A.length-2;i++)
    {
        var avg2=(A[i+1]+A[i])/2;
        var avg3=(A[i+2]+A[i+1]+A[i])/3;
        if(min_val==null)
        {
            min_idx=i;
            min_val=avg2<avg3 ? avg2 : avg3;
        }
        else if(avg2<min_val || avg3<min_val)
        {
            min_val=avg2 < avg3 ? avg2: avg3;
            min_idx=i;
        }
    }

    // check last two?
    var avg2=(A[A.length-2]+A[A.length-1])/2;
    if(avg2<min_val) min_idx=A.length-2;
    
    return min_idx;
}

arr=[-1000,-1000];

console.log(solution(arr));