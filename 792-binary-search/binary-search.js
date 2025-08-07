/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
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
    if(low==nums.length || nums[low]!=target) return -1;
    return low;
};