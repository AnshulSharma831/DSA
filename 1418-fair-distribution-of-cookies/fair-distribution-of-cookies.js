/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
    const n=cookies.length;
    const distribution=new Array(k).fill(0);
    let minUnfairness=Infinity;

    function backtrack(index) {
        if (index===n) {
            minUnfairness=Math.min(minUnfairness,Math.max(...distribution));
            return;
        }
        for (let i=0;i<k;i++) {
            distribution[i]+=cookies[index];
            backtrack(index+1);
            distribution[i]-=cookies[index];
            if(distribution[i]===0)break; 
        }
    }

    backtrack(0);
    return minUnfairness;
};
