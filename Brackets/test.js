// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// possibles
// 

function solution(S) {
    
    // write your code in JavaScript (Node.js 6.4.0)
    // writing a hash map. 
    if(S.length==0)
        return 1;

    var expecting=new Array();

    for(var i=0;i<S.length;i++)
    {
        var c=S[i];
        var isOpener=c=="(" || c=="[" || c=="{";
        var isCloser=c==")" || c=="]" || c=="}";
        if(!isOpener && !isCloser)
            continue;
        if(isOpener)
        {
            var expc="";
            switch (c){
                case "{" : expc="}"; break;
                case "(" : expc=")"; break;
                case "[" : expc="]"; break;
                default:continue;break;
            }
            expecting.push(expc);// unshift what we are expecting.
        }
        else
        {
            // case {] or none.  case {[]}
            if(expecting.length==0 || expecting[expecting.length-1]!=c)
            {
                return 0;
            }
            expecting.pop();
        }
    }

    return expecting.length==0 ? 1: 0;
}

var str="{[()()]}";//1
console.log(solution(str));
var str="([)()]";///0
console.log(solution(str));
var str="{{[()]}}[]()";// 1
console.log(solution(str));
var str="{{[()]}}[}]()";// 0
console.log(solution(str));

var str="";
for(var i=0;i<100000;i++)
    str+="(";
for(var i=0;i<100000;i++)
    str+=")";
str+="}{";
console.log(str.length);
var st=new Date().getTime();
console.log(solution(str));
console.log("In "+((new Date().getTime()-st)/1000));

