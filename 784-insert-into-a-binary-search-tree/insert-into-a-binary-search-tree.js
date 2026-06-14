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
var insertIntoBST = function(root, val) {
    if(!root){
        let node=new TreeNode(val,null,null);
        return node;
    }
    let ans=false;
    let traverse=(curr)=>{
        if(!curr){
            return;
        }
        if(val<curr.val){
            traverse(curr.left,val);
            if(!ans){
                let node=new TreeNode(val,null,null);
                curr.left=node;
                ans=true;
            }
            return;
        }
        else{
            traverse(curr.right,val);
            if(!ans){
                let node=new TreeNode(val,null,null);
                curr.right=node;
                ans=true;
            }
            return;
        }
    }
    traverse(root,val);
    return root;
};