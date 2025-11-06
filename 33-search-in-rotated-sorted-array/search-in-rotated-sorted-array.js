/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {
    let l=0;
    let h=arr.length-1;
    while(l<=h){
        let mid=l+Math.floor((h-l)/2);
        if(target===arr[mid]){
            return mid;
        }
        if(arr[l]<=arr[mid]){
            if(target<arr[mid] && target>=arr[l]){
                h=mid-1;
            }
            else{
                l=mid+1;
            }
        }
        else{
            if(target>arr[mid] && target<=arr[h]){
                l=mid+1;
            }else{
                h=mid-1;
            }
        }
    }
    return -1
};