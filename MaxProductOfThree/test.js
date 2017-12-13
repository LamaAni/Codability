
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function dosort(a,b){
    if(a==b)
        return 0;
    return a>b ?1: -1;
}
function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    if(A.length<3)
        return 0; // cannot happen due to input.
    
    A=A.sort(dosort);

    var l=A.length;
    // check two negative.
    var atMin=A[0]*A[1]*A[l-1]; // minimal vlaues.
    var atMax=A[l-3]*A[l-2]*A[l-1]; // minimal vlaues.
    return atMin>atMax ? atMin : atMax;
}

var arr=[-3,1,2,-2,5,6];
console.log(solution(arr));

var arr=[-5,-5,4,5];
console.log(solution(arr));
