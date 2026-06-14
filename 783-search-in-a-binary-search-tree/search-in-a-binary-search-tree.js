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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    //Bottom up recursion
    if(!root){
        return null;
    }
    let leftBST=searchBST(root.left,val);
    let rightBST=searchBST(root.right,val);
    if(root.val==val){
        return root;
    }
    return leftBST || rightBST;
};