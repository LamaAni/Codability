// Find binary gap.
function solution(N) {
    // finding the maxmal gap.
    // operation for N=N>>1 move one bit.
    // operation of b=N&0x1; gives current last bit.
    // always positive.

    if(N<=3)
        return 0; // no gap since number of bits is less then 3.
    
    var maxGap=0;
    var curGap=0;
    var isInGap=false;
    while(N>0)
    {
        var b=N&0x1;
        if(b==1)
        {
            // only in case where we had 1 before.
            if(isInGap && maxGap<curGap)
                maxGap=curGap;
            curGap=0;
            isInGap=1;
        }
        else if(isInGap)
        {
            curGap+=1;
        }

        // move next.
        N=N>>1;
    }

    // return current.
    return maxGap;
}

function toBits(num)
{
    if(num==0)
        return [0];
    var bits=[];
    while(num>0)
    {
        bits.push(num & 0x1);
        num = num>>1;
    }

    return bits;
}

var num=3;

console.log(toBits(num).join(','));
console.log(solution(num));



