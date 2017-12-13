// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)

    // finding the leader.
    var current=A[0];
    var count=1;
    for(var i=1;i<A.length;i++)
    {
        if(A[i]==current)
        {
            // need to add the current.
            count+=1;
        }
        else if(count>0)
            count-=1;
        else{
            count=1;
            current=A[i];
        }
    }
    var leader=current;
    count=0;
    for(var i=0;i<A.length;i++)
        if(A[i]==leader)
            count++;

    // is this the leader, if not impossible.
    if(count<A.length/2)return 0;

    // checking occurances.s
    var grpCount=0;
    var curLeadCount=0;
    for(var i=0;i<A.length;i++)
    {
        if(A[i]==leader) curLeadCount++;

        var numOfLeadersBefore = curLeadCount;
        var numOfLeadersAfter = count-curLeadCount;
        //check that current has same leader.
        var firstGroupHasLeader=numOfLeadersBefore>(i+1)/2;
        var lastGroupHasLeader=numOfLeadersAfter>(A.length-i-1)/2;

        if(firstGroupHasLeader && lastGroupHasLeader)
            grpCount+=1;
    }

    return grpCount;
}

var arr=[4,3,4,4,4,2];
console.log(solution(arr));