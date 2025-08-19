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
    if(!head){
        return false
    }
    let hash=new Map();
    let temp=head;
    while(temp!=null){
        if(hash.has(temp)){
            return true;
        }
        else{
            hash.set(temp,1);
            temp=temp.next;
        }
    }
    return false;
};