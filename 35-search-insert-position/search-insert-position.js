/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low=0;
    let high=nums.length;
    let mid;
    while(low<high){
        mid=Math.floor((low+high)/2);
        if(nums[mid]==target){
            return mid;
        }
        if(nums[mid]>=target){
            high=mid;
        }
        else{
            low=mid+1;
            }
        }
    return low;
};