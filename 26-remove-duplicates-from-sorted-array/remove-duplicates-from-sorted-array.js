/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let x=0;
    let i=0;
    while(i<nums.length){
        
        if(nums[x]!=nums[i]){
            x=x+1;
            nums[x]=nums[i];
        }
        i=i+1
        
    }
    return x+1
};