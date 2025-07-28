/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    function power(target){
        if(target==1){
            return true;
        }
        if(target<1 || (target%2!=0)){
            return false;
        }
        return power(target/2);
    }
    return power(n);
};