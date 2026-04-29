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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root){
        return false;
    }
    if(!root.left && !root.right){
        if(targetSum==root.val){
            return true;
        }
    }
    let hasleftsum=hasPathSum(root.left,targetSum-root.val);
    let hasrightsum=hasPathSum(root.right,targetSum-root.val);
    return hasleftsum || hasrightsum;
};