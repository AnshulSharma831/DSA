/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let j=s.length-1;
    let size=0;
    while(j>0 && s[j]===" "){
        j--;
    }
    while(j>=0 && s[j]!=" "){
        j--;
        size+=1;
    }
    return size;
};