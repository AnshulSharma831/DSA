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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ans=[]
    let levelTraverse=(curr,level)=>{
        if(!curr){
            return;
        }
        if(!ans[level]){
            ans[level]=[];
        }
        ans[level].push(curr.val);
        levelTraverse(curr.left,level+1);
        levelTraverse(curr.right,level+1);
    }
    levelTraverse(root,0);
    return ans;
};