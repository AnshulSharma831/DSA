/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let x=0;
    let t;
    if(nums.lenght<=1){
        return
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
            t=nums[x];
            nums[x]=nums[i];
            nums[i]=t;
            x+=1
        }

    }
};