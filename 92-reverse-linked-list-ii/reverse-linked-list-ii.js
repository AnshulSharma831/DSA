/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(!head || left==right){
        return head;
    }
    if (left<1 || right<left) {
        return head;
    }
    let left1=head;
    let right1=head;
    let leftprev=null;
    for(let i=1;i<left;i++){
        leftprev=left1;
        left1=left1.next;
    }   
    for(let j=1;j<right;j++){
        right1=right1.next;
    }
    if(left1==null || right1==null ){
        return head;
    }
    if(left1==right1){
        return head;
    }
    let temp=left1.next;
    let prev=right1.next;
    while(left1!=right1){
        left1.next=prev;
        prev=left1;
        left1=temp;
        temp=temp? temp.next:null;
    }
    left1.next=prev;
    if(leftprev==null){
        head=right1;
        return head;
    }
    else{
        leftprev.next=right1;
    }
    return head;
    
};