/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let sent=new ListNode();
    let ans=sent;
    let temp1=list1;
    let temp2=list2;
    while(temp1 && temp2){
        if(temp1.val>temp2.val){
            let newnode=new ListNode(temp2.val);
            ans.next=newnode;
            ans=ans.next;
            temp2=temp2.next;
        }
        else{
            let newnode=new ListNode(temp1.val);
            ans.next=newnode;
            ans=ans.next;
            temp1=temp1.next;
        }
    }
    while(temp1){
        let newnode=new ListNode(temp1.val);
        ans.next=newnode;
        ans=ans.next;
        temp1=temp1.next;
    }
    while(temp2){
        let newnode=new ListNode(temp2.val);
        ans.next=newnode;
        ans=ans.next;
        temp2=temp2.next;
    }

    return sent.next;
};