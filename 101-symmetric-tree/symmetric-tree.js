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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root){
        return true;
    }
    let ans=true;
    function checkSymmetric(curr1,curr2){
        if(!ans){
            return;
        }
        if(!curr1 && !curr2){
            return;
        }
        if((!curr1 && curr2) || (curr1 && !curr2)){
            ans=false;
            return;
        }
        if(curr1.val!=curr2.val){
            ans=false;
            return;
        }
        checkSymmetric(curr1.left,curr2.right);
        checkSymmetric(curr1.right,curr2.left);
    }
    checkSymmetric(root,root);
    return ans;
};