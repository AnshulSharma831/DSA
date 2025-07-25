/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function findFirst(nums,target){
        let index=-1;
        let high=nums.length-1;
        let low=0;
        let mid;
        while(low<=high){
            mid=Math.floor((low+high)/2);
            if(nums[mid]==target){
                index=mid;
                high=mid-1;
                //keep searching on left side to get the starting index
            }
            if(nums[mid]>target){
                high=mid-1
            }
            if(nums[mid]<target){
                low=mid+1;
            }
        }
        return index;
    }

    function findLast(nums,target){
        let index=-1;
        let low=0;
        let high=nums.length-1;
        while(low<=high){
            mid=Math.floor((low+high)/2);
            if(nums[mid]==target){
                index=mid;
                low=mid+1;
                //keep searching on right side to get the last index
            }
            if(nums[mid]>target){
                high=mid-1;
            }
            if(nums[mid]<target){
                low=mid+1;
            }
        }
        return index;
    }
    return [findFirst(nums,target),findLast(nums,target)];
};