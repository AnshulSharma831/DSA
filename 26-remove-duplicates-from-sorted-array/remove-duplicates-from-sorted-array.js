/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    k=0
    length=nums.length
    for(let i=0;i<length;i++){
        if(nums[i]>nums[k]){
            k=k+1
            nums[k] = nums[i]
        }
    }
    return k+1
    
};