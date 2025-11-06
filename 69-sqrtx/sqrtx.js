/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l=1;
    let h=x;
    let sqrt=0;
    let ans=0;
    while(l<=h){
        let mid=Math.floor((l+h)/2);
        sqrt=mid*mid;
        if(sqrt==x){
            return mid;
        }
        if(sqrt<x){
            l=mid+1;
            ans=mid;
        }if(sqrt>x){
            h=mid-1;
        }
    }
    return ans;
};