/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let pro=0;
    let min=Infinity;
    for(let i=0;i<prices.length;i++){
        if(min>prices[i]){
            min=prices[i];
        }
        if(prices[i]>min){
            pro+=(prices[i]-min);
            min=prices[i];
        }
    }
    return pro;
};