/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let ans=new ListNode();
    let ansHead=ans;
    let carry=0;
    while(l1 || l2 || carry){
        let sum=(!l1 ? 0:l1.val) + (!l2?0:l2.val) + carry;
        carry= Math.floor(sum/10);
        let digit=sum%10;
        let newnode=new ListNode(digit);
        ans.next=newnode;
        ans=ans.next;
        l1= l1?l1.next:l1;
        l2= l2?l2.next:l2;
    }
    return ansHead.next;
};