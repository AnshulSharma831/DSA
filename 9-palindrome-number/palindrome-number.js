/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let digit=0;
    let rev=0;
    if(x<0){
        return false
    }
    let num=x
    while(num>0){
        digit=num%10;
        rev=rev*10+digit;
        num=Math.floor(num/10);
    }
    
    if (x===rev){
        return true
    }
    return false
};