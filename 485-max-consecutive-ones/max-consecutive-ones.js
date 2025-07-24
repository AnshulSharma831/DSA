/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max_sum =0
    let count =0
    let n = nums.length
    for(let i =0;i<n;i++){
            if(nums[i]==1){
                count+=1
            }
            if(max_sum<count){
                max_sum = count
            }
            if(nums[i]==0){
                count=0
            }
    }
    return max_sum
};