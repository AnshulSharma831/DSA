/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    function fibo(n){
        if(n==1){
            return 1;
        }
        if(n<1){
            return 0;
        }
        return fibo(n-1)+fibo(n-2);
    }
    return fibo(n)
};