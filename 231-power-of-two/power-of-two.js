/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    function twoMult(num){
        if(Math.pow(2,num)>n){
            return false;
        }
        if(Math.pow(2,num)==n){
            return true;
        }
        return twoMult(num+1);
    }
    return twoMult(0);
};