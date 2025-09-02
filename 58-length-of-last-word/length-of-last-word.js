/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let str=s.trim();
    let split=str.split(" ");
    return split[split.length-1].length;
};