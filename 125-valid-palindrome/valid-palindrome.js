/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left=0;
    let right=s.length-1;
    s=s.toLowerCase();
    while(left<right){
        while(left<right && !s[left].match(/[a-z0-9]/)){
           left++; 
        }
        while(right>left && !s[right].match(/[a-z0-9]/)){
            right--;
        }
        if(s[left]!=s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};