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
var postorderTraversal = function(root) {
    let ans=[];
    let stack=[];
    let curr=root;
    let lastVisited=root;
    while(stack.length || curr){
        while(curr){
            stack.push(curr);
            curr=curr.left;
        }
        let peekNode=stack[stack.length-1];
        if(peekNode.right && peekNode.right!=lastVisited){
            curr=peekNode.right;
        }
        else{
            ans.push(peekNode.val);
            lastVisited=stack.pop();
        }
    }
    return ans;
};