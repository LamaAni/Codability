// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    if(N==1) // simply becuse.
        return 1;

    // write your code in JavaScript (Node.js 6.4.0)
    var initialN=N;
    var fact=1;
    for(var i=2;i*i<=initialN;i++)
    {
        var encn=0;
        while(N%i==0)
        {
            encn+=1;
            N=N/i;
        }
        fact=fact*(encn+1);
    }

    if(N>1) // some leftover
        fact*=2;

    return fact; // 1 and N is always a factor.
}

function naiev(N){
    if(N==1) return 1;
    var fact=1;
    for(var i=2;i<=N;i++)
    {
        if(N%i==0) fact+=1;
    }

    return fact;
}

for(var i=1;i<1000;i++)
{
    var sol=solution(i);
    var na=naiev(i);
    if(na!=sol)
        console.log(i+": ",sol,"|",na);
}
