/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let freq={}
    for(let ch of tiles){
        freq[ch]=(freq[ch]||0)+1;
    }

    function backtrack(){
        let count=0;
        for(let ch in freq){
            if(freq[ch]>0){
                count+=1;
                freq[ch]--;
                count+=backtrack();
                freq[ch]+=1;
            }
        }
        return count;
    }
    return backtrack();
};