/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head==null || head.next==null){
        return head;
    }
    let rem=k;
    let temp=head;
    let count=0;
    while(temp!=null){
        temp=temp.next;
        count+=1;
    }
    if(count==k){
        return head;
    }
    if(k>count){
        //% krne pr jo bhe ayega utni baar rotate krna hai 
        rem=k%count;
    }
    let slow=head;
    let fast=head;
    for(let i=0;i<rem;i++){
        fast=fast.next;
    }
    while(fast.next!=null){
        slow=slow.next;
        fast=fast.next;
    }
    fast.next=head;
    head=slow.next;
    slow.next=null;
    return head;
};