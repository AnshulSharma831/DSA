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
    let l3 = new ListNode(0);  
    let head = l3;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            l3.next = new ListNode(list1.val);
            list1 = list1.next;
            l3 = l3.next;     
        } else if (list1.val > list2.val) {
            l3.next = new ListNode(list2.val);
            list2 = list2.next;
            l3 = l3.next;          
        } else {
            
            l3.next = new ListNode(list1.val);
            l3 = l3.next;
            l3.next = new ListNode(list2.val);
            l3 = l3.next;
            list1 = list1.next;
            list2 = list2.next;
        }
    }


    while (list1 !== null) {
        l3.next = new ListNode(list1.val);
        list1 = list1.next;
        l3 = l3.next;
    }

 
    while (list2 !== null) {
        l3.next = new ListNode(list2.val);
        list2 = list2.next;
        l3 = l3.next;
    }

    return head.next;  
};