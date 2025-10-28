/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    stack=[];
    for(let i=0;i<tokens.length;i++){
        if(!isNaN(parseInt(tokens[i]))){
            stack.push(parseInt(tokens[i]));
        }else{
            let b=stack.pop();
            let a=stack.pop();
            let eval=calculate(a,b,tokens[i]);
            stack.push(eval);
        }
    }
    let sun=stack.pop();
    return sun;
};

function calculate(a,b,token){
    switch(token){
        case "+": return a+b;
        case "-": return a-b;
        case "/": return parseInt(a/b);
        case "*": return a*b;
    }
}