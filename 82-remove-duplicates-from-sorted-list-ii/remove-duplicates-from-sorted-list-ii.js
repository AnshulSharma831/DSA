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
var deleteDuplicates = function(head) {
    // ✅ Fixed head condition
    while (head !== null && head.next !== null && head.val === head.next.val) {
        let dupVal = head.val;
        while (head !== null && head.val === dupVal) {
            head = head.next;
        }
    }

    let temp = head;
    let prev = head;

    while (temp && temp.next) {
        if (temp.val === temp.next.val) {
            let dupVal = temp.val;
            while (temp !== null && temp.val === dupVal) {
                temp = temp.next;
            }
            prev.next = temp;
        } else {
            prev = temp;
            temp = temp.next;
        }
    }

    return head;
};
