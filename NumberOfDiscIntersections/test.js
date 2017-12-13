function dosort(a,b){
    if(a==b)
        return 0;
    return a>b ?1: -1;
}
function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    if(A.length<2)
        return 0; // no intersecting disks

    starts=[];
    ends=[];

    for(var i=0;i<A.length;i++)
    {
        // start locs.
        starts[i]=i-A[i];
        ends[i]=i+A[i];
    }

    starts=starts.sort(dosort);
    ends=ends.sort(dosort);
    var endidx=0;
    var cricleCount=1;
    var cnt=0;
    var total=0;
    for(var i=1;i<starts.length;i++)
    {
        while(ends[endidx]<starts[i])
        {
            // need to reduce the count;
            cnt-=1; // means added zer.
            endidx+=1;
        }
        cnt+=1;
        total+=cnt;
        if(total>10000000)
            return -1;
    }

    return total;
}
var arr=[0,5];
console.log(solution(arr));
var arr=[1,5,2,1,4,0];
console.log(solution(arr));
