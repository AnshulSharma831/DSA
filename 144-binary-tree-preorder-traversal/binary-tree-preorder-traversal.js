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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let ans =[]
    function pretraverse(curr){
        if(curr==null){
            return;
        }
        ans.push(curr.val);
        pretraverse(curr.left);
        pretraverse(curr.right);
    }
    pretraverse(root);
    return ans;
};