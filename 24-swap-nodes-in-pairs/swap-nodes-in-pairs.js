/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next){
        return head;
    }
    let curr=head;
    let temp=curr.next;
    let sent=new ListNode();
    let prev=sent;
    while(curr.next && curr){
        curr.next=temp.next;
        temp.next=curr;
        prev.next=temp;
        prev=temp.next;
        if(!curr || !curr.next){
            return sent.next;
        }
        curr=curr.next;
        temp=curr.next;
    }
    return sent.next;
};