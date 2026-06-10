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
var maxPathSum = function(root) {
    let maxSum=-Infinity;
    let traverse=(curr)=>{
        if(!curr){
            return 0;
        }
        let maxLeft=traverse(curr.left);
        let maxRight=traverse(curr.right);

        let left=Math.max(0,maxLeft);
        let right=Math.max(0,maxRight);

        let currSum=curr.val+left+right;

        maxSum=Math.max(maxSum,currSum);
        return curr.val+Math.max(left,right);
    }
    traverse(root);
   
    return Math.max(maxSum,root.val);
};