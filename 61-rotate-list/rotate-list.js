/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next){
        return head
    }
    if(k==0){
        return head;
    }
    let f=head;
    
    while(k>0){
        if(f.next==null){
            f=head;
            k--;
        }
        else{
            f=f.next;
            k--;
        }
    }
    if(f==head){
        return head;
    }
    let temp=head;
    while(f.next){
        f=f.next;
        temp=temp.next;
    }
    let newnode=temp.next;
    temp.next=null;
    f.next=head;
    head=newnode;
    return head;
};