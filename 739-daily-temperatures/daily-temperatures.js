/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    let stack = [];
    let ans = [];
    let n = temp.length;
    ans.push(0);
    stack.push(n - 1);
    for (let i = n - 2; i >= 0; i--) {
        while (stack.length && temp[i] >= temp[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length) {
            ans.push(stack[stack.length - 1] - i);
        } else {
            ans.push(0);
        }
        stack.push(i);
    }
    ans.reverse();
    return ans;
};

