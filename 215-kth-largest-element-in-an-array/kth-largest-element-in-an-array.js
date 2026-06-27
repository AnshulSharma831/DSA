/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let pq= new MaxPriorityQueue();
    for(let i of nums){
        pq.enqueue(i);
    }
    for(let i=0;i<k-1;i++){
        pq.dequeue();
    }
    return pq.dequeue();
};