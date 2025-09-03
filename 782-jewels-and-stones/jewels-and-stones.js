/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jset=new Set();
    let count=0;
    for(let i=0;i<jewels.length;i++){
        jset.add(jewels[i]);
    }
    for(let j=0;j<stones.length;j++){
        if(jset.has(stones[j])){
            count+=1;
        }
    }
    return count;
};