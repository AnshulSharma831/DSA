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
var rightSideView = function(root) {
    let arr=[]
    let traverse=(curr,level)=>{
        if(!curr){
            return;
        }
        if(!arr[level]){
            arr[level]=[];
        }
        arr[level].push(curr.val);
        traverse(curr.left,level+1);
        traverse(curr.right,level+1);

    }
    traverse(root,0);
    let ans=[];
    for(let i=0;i<arr.length;i++){
        let n=arr[i].length;
        ans.push(arr[i][n-1]);
    }
    return ans;
};