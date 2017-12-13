// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function canSliceWithPeaks(peaks,K,N){
    if(N%K!=0)
        return false; // cannot slice N into k values.
    // check that each slice has a peak.
    // searching within delta;
    var delta=N/K;
    var pos=0;
    for(var i=0;i<peaks.length;i++)
    {
        if(peaks[i]>pos+delta)
        {
            // just no.
            return false;
        }
        pos+=delta;
        if(delta>N)
            return true;
    }
    return true;
}

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)

    // start with naieve solution.
    // find peaks.
    var N=A.length;
    var peaks=[];
    for(var i=1;i<A.length-1;i++)
    {
        if(A[i]<=A[i-1] || A[i]<=A[i+1])
        {
            continue; // not a peak.
        }

        peaks.push(i);
    }

    if(peaks.length<2)
        return peaks.length;

    // found the peaks.
    // now find lower and upper number of slices.
    for(var K=peaks.length;K>0;K--)
    {
        if(N%K!=0)continue;
        if(canSliceWithPeaks(peaks,K,N)) return K;
    }
    return 0;
}
var arr=[0, 1, 0, 0, 1, 0, 1, 0];
console.log(solution(arr));
var arr=[1,0];
console.log(solution(arr));
var arr=[1,2,3];
console.log(solution(arr));
var arr=[0, 1, 0, 0, 0];
console.log(solution(arr));
var arr=  [1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2] ;
console.log(solution(arr));