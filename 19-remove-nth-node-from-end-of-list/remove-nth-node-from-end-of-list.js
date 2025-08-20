/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // one pass approach
    let sent=new ListNode();
    sent.next=head;
    let slow=sent;
    let fast=head;
    for(let i=1;i<n;i++){
        fast=fast.next;
    }
    while(fast.next){
        fast=fast.next;
        slow=slow.next;
    }
    slow.next=slow.next.next;
    return sent.next;
};