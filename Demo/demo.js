var arr=[1, 2, 3, 20, 21, 22];

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    
    // Sort is O(n log(n)) - not the best solution, but better to give one.
    // Maybe removing duplicates would result in faster sort - ran out of time.
    // write your code in JavaScript (Node.js 6.4.0)
    A=A.sort(function(a,b){return a>b});

    var n=1;
    
    // if maximal is larger then n, there is not need to test.
    if(A[A.length-1]<1)
        return 1;
        
    // check items were mininal N is. 
    // since checking for minimal start from 1.
    for(var i=0;i<A.length;i++)
    {        
        // since all sorted integers, if we find a gap we can return instently.
        if(A[i]>n)
            return n;
            
        // only when n is equal to the number advance.
        // (Duplicates, plus less then 1).
        if(A[i]==n)
            n+=1;
    }

    // there is no need to continue. 
    return n;
}

console.log(solution(arr));
