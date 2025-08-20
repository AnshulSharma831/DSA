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
    let size=0;
    let temp=head;
    while(temp!=null){
        temp=temp.next;
        size++;
    }
    let DeleteIndex=size-n;
    let sent=new ListNode();
    sent.next=head;
    let prev=sent;
    for(let i=0;i<DeleteIndex;i++){
        prev=prev.next
    }
    prev.next=prev.next.next;

    return sent.next;
};