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
var swapPairs = function(head) {
    if(!head || !head.next){
        return head;
    }
    let arr=[];
    let temp=head;
    while(temp!=null){
        arr.push(temp.val);
        temp=temp.next;
    }
    let t;
    for(let i=0;i<arr.length-1;i+=2){
        t=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=t;
    }
    let sent=new ListNode();
    let ans=sent;
    let len=arr.length-1;
    let count=0;
    while(count<=len){
        let newnode=new ListNode(arr[count]);
        ans.next=newnode;
        ans=ans.next;
        count++;
    }
    return sent.next;
};