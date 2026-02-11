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
    let map=new Set();
    let temp=headA;
    while(temp!=null){
        map.add(temp);
        temp=temp.next;
    }
    let trav=headB;
    while(trav!=null){
        if(map.has(trav)){
            return trav;
        }
        trav=trav.next
    }
};