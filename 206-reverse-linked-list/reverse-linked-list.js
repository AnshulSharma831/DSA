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
var reverseList = function(head) {
    
        let temp=head;
        let trav=null;
        while(temp!=null){
            let node=temp.next;
            temp.next=trav;
            trav=temp;
            temp=node;
        }
        head=trav;
        return head;

    

};