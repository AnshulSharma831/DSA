/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if(stones.length==1){
        return stones[0];
    }
    let pq=new MaxPriorityQueue();
    for(let i=0;i<stones.length;i++){
        pq.enqueue(stones[i]);
    }
    while(pq.size()>1){
        let x=pq.dequeue();
        let y=pq.dequeue();
        let z=Math.abs(x-y);
        if(z!=0){
            pq.enqueue(z);
        }
        else if(pq.size()==0){
            pq.enqueue(0);
        }
    }
    
    return pq.front();
};