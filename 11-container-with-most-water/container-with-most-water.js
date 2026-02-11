/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxarea=0;
    let i=0;
    let j=height.length-1;
    let n=height.length;
    while(i<j){
        area=Math.min(height[i],height[j])*(j-i);
        maxarea=Math.max(maxarea,area);
        if(height[i]<height[j]){
            i++
        }
        else{
            j--;
        }
    }
    return maxarea;
};