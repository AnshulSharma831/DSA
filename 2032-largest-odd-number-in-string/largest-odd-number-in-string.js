/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(s) {
    for(let i=s.length-1;i>=0;i--){
        if(parseInt(s[i])%2!=0){
            return s.slice(0,i+1);
        }
    }
    return "";
};