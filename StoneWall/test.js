// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
    // write your code in JavaScript (Node.js 6.4.0)
    var heights=[H[0]];
    var blockNum=1;
    for(var i=1;i<H.length;i++)
    {
        if(H[i]===H[i-1])
            continue; // nothing to do.

        var isGoingDown=H[i]<H[i-1];
        if(isGoingDown){
            heights.pop();

            // search for a height to fall onto as long as we are above current.
            var hasHeight=false;
            while(heights.length>0 && !hasHeight && H[i]<=heights[heights.length-1])
            {
                hasHeight=heights[heights.length-1]==H[i];
                if(!hasHeight)
                    heights.pop();
            }
            
            if(hasHeight)
                continue;

            heights.push(H[i]); // add the new height.
            blockNum+=1;
        }
        else {
            heights.push(H[i]); // add the new height.
            blockNum+=1;
        }
    }

    // checking height changes. If going back to previous height then ignore cur. 
    return blockNum;
}

var h=[1, 2, 3, 2,3, 2, 1];
console.log(solution(h));

var h=[8,8,5,7,9,8,7,4,8];
console.log(solution(h));

var h=[8,9,8,6];
console.log(solution(h));

var h=[8,9,8,6,11,5];
console.log(solution(h));