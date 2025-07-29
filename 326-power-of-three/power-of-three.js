/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    function threePow(n){
        if(n==1){
            return true;
        }
        if(n<1){
            return false;
        }
        return threePow(n/3);
    }
    return threePow(n);
};