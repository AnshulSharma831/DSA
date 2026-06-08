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
    let lca=null;
    let traverse=(curr)=>{
        if(lca!=null){
            return;
        }
        let count=0
        if(!curr){
            return 0;
        }
        let ansOnleft=traverse(curr.left);
        let ansOnright=traverse(curr.right);
        if(curr.val==p.val || curr.val==q.val){
            count+=1;
        }
        count+=ansOnleft+ansOnright;
        if(count===2 && lca==null){
            lca=curr;
        }
        return count;
    }
    traverse(root);
    return lca;
};