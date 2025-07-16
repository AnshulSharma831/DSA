/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let n=s.length;
    let t;
    for(let i=0;i<n/2;i++){
        t=s[i];
        s[i]=s[n-1-i]
        s[n-i-1]=t
    }
};