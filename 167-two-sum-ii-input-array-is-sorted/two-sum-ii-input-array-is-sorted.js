/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n=nums.length;
    let i=0;
    let j=n-1;
    while(i<j){
        let summ=nums[i]+nums[j];
        if(summ==target){
            return [i+1,j+1];
        }
        else if(summ>target){
            j--;
        }
        else if(summ<target){
            i++;
        }
    }
};