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
var maxDepth = function(root) {
    let level=0;
    let depth=(curr,size)=>{
        if(!curr){
            return;
        }
        level=Math.max(level,size);
        depth(curr.left,size+1);
        depth(curr.right,size+1);
    }
    depth(root,1);
    return level;
};