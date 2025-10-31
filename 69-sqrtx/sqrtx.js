/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(typeof x!=="number" || isNaN(x) || x<0){
        return NaN;
    }
    if(x===0 || x===1){
        return x;
    }
    let low=1;
    let high=x;
    let result=0;

    while(low<=high){
        let mid=Math.floor((low+high)/2);
        let sq=mid*mid;
        if(sq==x){
            return mid;
        }
        if(sq>x){
            high=mid-1;
        }
        else{
            result=mid;
            low=mid+1;
        }
    }
    return result;
};