// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A,B)
{
    var downFish=[];
    var upSurvivers=0;

    for(var i=0;i<A.length;i++)
    {
        var isDownsream=B[i]==1;
        if(isDownsream)
            downFish.push(A[i]);
        else
        {
            // hit and upstream fish.
            while(downFish.length>0)
            {
                if(downFish[downFish.length-1]<A[i])
                    downFish.pop();
                else 
                {
                    // was eaten.
                    // thefore 
                    break;
                }
            }

            if(downFish.length==0)
                upSurvivers+=1;
        }
    }

    return upSurvivers+downFish.length;
}

// checking.
var a=[4,3,2,1,5];
var b=[0,1,0,0,0];
console.log(solution(a,b));

// checking.
var a=[2,1];
var b=[1,0];
console.log(solution(a,b));

//
var a=[1,2,3,4,5,6];
var b=[1,0,1,0,1,0];
console.log(solution(a,b));