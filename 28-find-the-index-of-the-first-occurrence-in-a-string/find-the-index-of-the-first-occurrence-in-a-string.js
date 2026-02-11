/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let i=0;
    let j=0;
    while(j<haystack.length){
        if(needle[i]==haystack[j]){
            i++;
            j++;
            if(i>=needle.length){
            return j-i;
        }
        }
        else{
            
            j=j-i+1;
            i=0;
        }
    }
    return -1;
};