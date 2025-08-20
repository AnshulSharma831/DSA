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
    let hash=new Map();
    let temp=headA;
    while(temp!=null){
        hash.set(temp,1);
        temp=temp.next;
    }
    let trav=headB;
    while(trav!=null){
        if(hash.has(trav)){
            return trav;
        }
        trav=trav.next;
    }
};