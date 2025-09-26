/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length<=1){
        return false
    }
    let stack=[];
    for(let i=0;i<s.length;i++){
        if(s[i]=="[" || s[i]=="{" || s[i]=="("){
            stack.push(s[i]);
        }
        else{
            if(stack.length==0){
                return false
            }
            let top=stack.pop();
            if((top=="[" && s[i]!=="]") || (top=="{" && s[i]!=="}") || (top=="(" && s[i]!==")")){
                return false;
            }
        }
    }
    if(stack.length==0){
        return true;
    }
    else{
        return false;
    }
};