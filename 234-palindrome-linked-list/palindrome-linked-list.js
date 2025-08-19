/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr=[];
    let temp=head;
    while(temp!=null){
        arr.push(temp.val);
        temp=temp.next;
    }
    let mid=Math.floor(arr.length/2);
    let n=arr.length-1;
    for(let i=0;i<mid;i++){
        if(arr[i]!=arr[n-i]){
            return false;
        }
    }
    return true;
};