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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiameter=0;
    let calculateDiameter=(curr)=>{
        if(!curr){
            return 0
        }
        let leftHeight=calculateDiameter(curr.left);
        let rightHeight=calculateDiameter(curr.right);
        maxDiameter=Math.max(leftHeight+rightHeight,maxDiameter);
        return 1+Math.max(leftHeight,rightHeight);
    }
    calculateDiameter(root);
    return maxDiameter;
};