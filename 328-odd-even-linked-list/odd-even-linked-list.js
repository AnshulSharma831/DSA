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
var oddEvenList = function(head) {
    let odd=new ListNode();
    let otemp=odd;
    let even=new ListNode();
    let etemp=even;

    let temp=head;
    let count=0;
    while(temp!=null){
        count+=1;
        temp=temp.next;
    }
    temp=head;
    for(let i=0; i<count;i++){
        if(i%2==0){
            let nextnode=new ListNode(temp.val);
            etemp.next=nextnode;
            etemp=etemp.next;
        }else{
            let nextnode=new ListNode(temp.val);
            otemp.next=nextnode;
            otemp=otemp.next;
        }
        temp=temp.next;
    }
    etemp.next=odd.next;
    return even.next;
};