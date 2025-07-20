/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum=0;
    let n=nums.length;
    for(let i=0;i<n;i++){
        sum+=nums[i];
    }
    let sumAll=Math.floor((n*(n+1))/2);
    let missingNo=sumAll-sum;
    return missingNo;
};