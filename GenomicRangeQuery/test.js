

function solution(S, P, Q) {
    // hashing p,q
    var map={
        A:[0],
        C:[0],
        G:[0],
        T:[0],
    }

    for(var i=0;i<S.length;i++)
    {
        var a=S[i]=='A' ? 1 : 0;
        var c=S[i]=='C' ? 1 : 0;
        var g=S[i]=='G' ? 1 : 0;
        var t=S[i]=='T' ? 1 : 0;

        map['A'][i+1]=map['A'][i]+a;
        map['C'][i+1]=map['C'][i]+c;
        map['G'][i+1]=map['G'][i]+g;
        map['T'][i+1]=map['T'][i]+t;
    }

    var rslt=[];
    for(var i=0;i<Q.length;i++)
    {
        // searching through the queries.
        var sidx=P[i];
        var eidx=Q[i]+1;
        var n=0;
        if(map.A[eidx]-map.A[sidx]>0)
            n=1;
        else if(map.C[eidx]-map.C[sidx]>0)
            n=2;
        else if(map.G[eidx]-map.G[sidx]>0)
            n=3;
        else n=4;
        rslt.push(n);
    }
    return rslt;
}

var s="TC";
var p=[0,0,1];
var q=[0,1,1];
console.log(solution(s,p,q));

var s="CAGCCTA";
var p=[2,1,5,0];
var q=[4,1,5,6];
console.log(solution(s,p,q));