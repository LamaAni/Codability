// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
        // write your code in JavaScript (Node.js 6.4.0)
        var N=A.length;
        var forward=[];
        forward[N-1]=0;
        forward[0]=0;
        var back=[];
        back[0]=0;
        back[N-1]=0;
        // maximal slice value at each position forwards.
        for(var i=1;i<N-1;i++)
            forward[i]=Math.max(forward[i-1]+A[i],0);

        // maximal slice value at each position backwards.
        for(var i=N-2;i>0;i--)
            back[i]=Math.max(back[i+1]+A[i],0);

        // find the max with 1 step diffrence.
        var max=0;
        for(var i=1;i<N-1;i++)
        {
            max=Math.max(max,forward[i-1]+back[i+1]);
        }
        return max;
}

var arr=  [3, 2, 6, -1, 4, 5, -1, 2];
console.log(solution(arr));