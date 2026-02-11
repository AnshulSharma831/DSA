/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let temp=headA;
    let trav=headB;
    while(temp!=trav){
        temp=temp==null? temp=headB: temp.next;
        trav=trav==null? trav=headA: trav.next;
        
    }
    return temp;
};