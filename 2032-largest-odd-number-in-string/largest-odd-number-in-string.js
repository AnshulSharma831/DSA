/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(nums) {
    for(let i=nums.length-1;i>=0;i--){
        if(parseInt(nums[i])%2!=0){
            return nums.slice(0,i+1);
        }
    }
    return "";
};