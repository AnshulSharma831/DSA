/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map={}
    let count=0;
    let maxcount=0;
    for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]]=1;
            count+=1;
            maxcount=Math.max(maxcount,count);
        }
        else{
            map={};
            i=i-count+1;
            count=0;
            map[s[i]]=1;
            count+=1;
        }
    }
    return maxcount;
};