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
        return mergeArr(leftArr,rightArr);
    }

    function mergeArr(leftArr,rightArr){
        let i=0;
        let j=0;
        let res=[];
        while(i<leftArr.length && j<rightArr.length){
            if(leftArr[i]<rightArr[j]){
                res.push(leftArr[i]);
                i++;
            }else{
                res.push(rightArr[j]);
                j++;
            }
        }
        while(i<leftArr.length){
            res.push(leftArr[i]);
            i++;
        }
        while(j<rightArr.length){
            res.push(rightArr[j]);
            j++;
        }
        return res;
    }
    let n=nums.length;
    return mergeSort(nums,0,n-1);
};