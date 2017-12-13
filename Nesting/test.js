// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// ok= (()())
// not= (())))()), )...,
// O(n)
// D(1)

function solution(S) {
    // write your code in JavaScript (Node.js 6.4.0)
    if(S.length==0)
        return 1;
    var contextIndex=0;
    // nesting.
    for(var i=0;i<S.length;i++)
    {
        var isOpener=S[i]=="(";
        contextIndex+=isOpener ? 1 : -1;
        if(contextIndex<0)
            return 0;
    }

    return contextIndex==0 ? 1 : 0;
}

var s="(())))())";
console.log(solution(s));

var s="(()())";
console.log(solution(s));