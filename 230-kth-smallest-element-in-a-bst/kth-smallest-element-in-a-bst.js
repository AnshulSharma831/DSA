/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr=[];
    let traverse=(curr)=>{
        if(!curr){
            return;
        }
        traverse(curr.left);
        arr.push(curr.val);
        traverse(curr.right);
    }
    traverse(root);
    return arr[k-1];
};