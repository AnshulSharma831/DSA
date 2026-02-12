/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxl=[]
    maxl[0]=height[0];
    let left=height[0];
    for(let i=0;i<height.length;i++){
        if(height[i]>left){
            left=height[i];
        }
        maxl.push(left);
    }
    let maxr=[];
    let hlen=height.length-1;
    maxr[0]=height[hlen];
    let right=height[hlen];
    for(let i=hlen-1;i>=0;i--){
        if(height[i]>right){
            right=height[i];
        }
        maxr[i]=right;
    }

    let summ=0;
    for(let i=0;i<maxl.length;i++){
        summ+=(Math.min(maxl[i],maxr[i])-height[i])>0 ? Math.min(maxl[i],maxr[i])-height[i] : 0;
    }
    return summ;
};