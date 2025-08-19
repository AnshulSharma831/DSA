/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow=head;
    let fast=head;
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }

    let trav=null;
    while(slow!==null){
        let newNode=slow.next;
        slow.next=trav;
        trav=slow;
        slow=newNode;
    }

    let left=head;
    let right=trav;
    while(right!=null){
        if(left.val!==right.val){
            return false;
        }
        left=left.next;
        right=right.next;
    }
    return true;
};