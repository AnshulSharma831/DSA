/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxPro=0
    let min=prices[0]
    for(let i=0;i<prices.length;i++){
        if(maxPro<prices[i]-min){
            maxPro=prices[i]-min;
        }
        if(min>prices[i]){
            min=prices[i];
        }
    }
    return maxPro
};