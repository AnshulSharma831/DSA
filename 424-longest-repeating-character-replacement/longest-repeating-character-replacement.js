/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    
    let i=j=0;
    let map={};
    map[s[0]]=1;
    let maxcount=0;
    while(j<s.length){
        if(windowValid(map,k)){
            maxcount=Math.max(maxcount,j-i+1);
            j++;
            map[s[j]]=!map[s[j]] ? 1 : ++map[s[j]];
        }
        else{
            --map[s[i]];
            ++i;
        }
    }
    return maxcount;
};

function windowValid(map,k){
    let totalcount=0;
    let maxcount=0;
    for(let i=0;i<26;i++){
        let char = String.fromCharCode(65+i);
        if(map[char]){
            totalcount+=map[char];
            maxcount=Math.max(maxcount, map[char])
        }
    }
    return ((totalcount-maxcount)<=k)
}