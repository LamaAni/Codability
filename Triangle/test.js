

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function do_sort(a,b){
    if(a==b)
        return 0;
    return a>b ? 1 : -1;
};

function solution(A) {
    if(A.length<3)return 0;
    
    // write your code in JavaScript (Node.js 6.4.0)
    A=A.sort(do_sort);

    // check for p, q, r
    for(var i=0;i<A.length-2;i++)
    {
        if(A[i]+A[i+1]>A[i+2])
            return 1;
    }

    return 0;
}

// var arr=[10,2,5,1,8,20];
// console.log(solution(arr));

// var arr=[10, 50, 5, 1];
// console.log(solution(arr));

var arr=[5,3,3];
console.log(solution(arr));

