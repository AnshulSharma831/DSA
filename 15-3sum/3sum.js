/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let ans=[];
    for(let i=0;i<nums.length;i++){
        if (i === 0 || nums[i] !== nums[i - 1]){
            twosum(nums,i,ans);
        }
    }
    return ans;
};

function twosum(arr,x,ans){
    let left = x+1;
    let right = arr.length-1;
    
    while(left<right){
        let summ=arr[x]+arr[left]+arr[right];
        if(summ>0){
            --right;
        }
        else if(summ<0){
            ++left;
        }
        else{
            ans.push([arr[x],arr[left],arr[right]]);
            ++left;
            --right;
            while(arr[left]==arr[left-1] && left<right) ++left ;

        }
    }
}