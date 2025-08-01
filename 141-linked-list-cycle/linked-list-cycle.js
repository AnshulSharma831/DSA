/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let visited=new Set();
    let temp=head;
    while(temp!=null){
        if(visited.has(temp)){
            return true;
        }
        visited.add(temp);
        temp=temp.next;
    }
    return false;
};