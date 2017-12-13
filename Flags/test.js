// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function tryPlant(locs,K)
{
    var left=K-1;
    var lastPlant=locs[0];
    for(var i=1;i<locs.length;i++)
    {
        if(locs[i]-lastPlant>=K)
        {
            left-=1;
            lastPlant=locs[i];
        }
        if(left==0)
            return true;
    }
    return left==0;
}

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var flagLocs=[];
    for(var i=1;i<A.length-1;i++)
    {
        if(A[i]<=A[i-1]|| A[i]<=A[i+1])
            continue;
        flagLocs.push(i);
    }

    if(flagLocs.length<2)
        return flagLocs.length;

    // trying to plant.
    var flags=flagLocs.length;
    if(tryPlant(flagLocs,flags))
        return flags;

    // we cant plant all the flags. so try half.
    var canPlant=0;
    var cannotPlant=flags+1;
    while(canPlant<cannotPlant-1)
    {
        var toPlant=Math.ceil((canPlant+cannotPlant)/2);
        if(tryPlant(flagLocs,toPlant))
        {
            canPlant=toPlant;
        }
        else{
            // cannot plant.
            cannotPlant=toPlant;
        }
    }

    return canPlant;
}
var arr=[3,3,1];
console.log(solution(arr));
var arr=[1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2];
console.log(solution(arr));

var arr=[1];
console.log(solution(arr));
var arr=[0,1,0,1,0,1,0,0];
console.log(solution(arr));

