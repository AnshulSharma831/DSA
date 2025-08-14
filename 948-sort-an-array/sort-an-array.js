/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function mergeSort(nums){
        if(nums.length == 1){
            return nums;
        }
        let mid=Math.floor(nums.length/2);
        let leftArr=mergeSort(nums.slice(0,mid));
        let rightArr=mergeSort(nums.slice(mid));
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
    return mergeSort(nums);
};