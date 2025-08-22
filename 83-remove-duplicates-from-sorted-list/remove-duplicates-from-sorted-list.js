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
var deleteDuplicates = function(head) {
    if(!head){
        return head;
    }

    let sent=new ListNode();
    sent.next=head;
    let prev=sent;
    while(prev && prev.next.next && prev.next){
        if(prev.next.val==prev.next.next.val){
            prev.next=prev.next.next;
        }
        else{
            prev=prev.next;
        }
    }
    return sent.next;
};