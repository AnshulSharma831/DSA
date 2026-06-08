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
var zigzagLevelOrder = function(root) {
    let ans=[]
    let zigzag=(curr,level)=>{
        if(!curr){
            return;
        }
        if(!ans[level]){
            ans[level]=[]
        }
        if(level%2!=0){
            ans[level].unshift(curr.val);
        }
        else{
            ans[level].push(curr.val);
        }
        zigzag(curr.left,level+1);
        zigzag(curr.right,level+1);
    }
    zigzag(root,0);
    return ans;
};