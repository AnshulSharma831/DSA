/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function mergeSort(nums,left,right){
        if(left==right){
            return [nums[left]];
        }
        let mid=Math.floor(left+(right-left)/2);
        let leftArr=mergeSort(nums,left,mid);
        let rightArr=mergeSort(nums,mid+1,right);
        return mergeArr(leftArr,rightArr,left,mid,right);
    }

    function mergeArr(leftArr,rightArr,left,mid,right){
        let i=0;
        let j=0;
        let res=[];
        let n1=mid-left+1;
        let n2=right-mid;
        while(i<n1 && j<n2){
            if(leftArr[i]<rightArr[j]){
                res.push(leftArr[i]);
                i++;
            }else{
                res.push(rightArr[j]);
                j++;
            }
        }
        while(i<n1){
            res.push(leftArr[i]);
            i++;
        }
        while(j<n2){
            res.push(rightArr[j]);
            j++;
        }
        return res;
    }
    let n=nums.length;
    return mergeSort(nums,0,n-1);
};