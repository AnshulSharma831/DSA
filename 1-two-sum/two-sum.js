/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map={};
    let n=nums.length;
    for(let i=0;i<n;i++){
        map[nums[i]]=i;
    }
    for(let i=0;i<n;i++){
        let pair=target-nums[i];
        if(map[pair] && map[pair]!=i){
            return [i,map[pair]];
        }
    }
};