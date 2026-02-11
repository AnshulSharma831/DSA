/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let lps=[0];
    let m=needle.length;
    let i=0;
    let j=1;
    while(j<m){
        if(needle[i]==needle[j]){
            lps[j]=i+1;
            i++;
            j++;
        }
        else{
            if(i==0){
                lps[j]=0;
                j++;
            }
            else{
                i=lps[i-1]
            }
        }
    }
    let me=0;
    let n=0;
    let h=haystack.length;
    while(me<h){
        if(haystack[me]==needle[n]){
            me++;
            n++;
        }
        else{
            if(n==0){
                me++;
            }
            else{
                n=lps[n-1]
            }
        }
        if(n==m){
            return me-m;
        }
    }
    return -1;
};