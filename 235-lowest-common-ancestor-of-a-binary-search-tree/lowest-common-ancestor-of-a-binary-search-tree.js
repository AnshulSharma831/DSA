/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    //common solution of binary tree
    let lca=null;
    let traverse=(curr)=>{
        let count=0;
        if(!curr){
            return 0;
        }
        let leftans=traverse(curr.left);
        let rightans=traverse(curr.right);
        if(curr.val==p.val || curr.val==q.val){
            count+=1;
        }
        count+=leftans+rightans;
        if(count===2 && !lca){
            lca=curr;
        }
        return count;
    }
    traverse(root);
    return lca;
};