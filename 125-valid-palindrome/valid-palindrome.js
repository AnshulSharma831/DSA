/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s==" " || s==""){
        return true
    }
    let s1="";
    for(let i=0;i<s.length;i++){
        let ch=s[i].toLowerCase();
        let code=ch.charCodeAt(0);
        if((code>=97 && code<=122) || (code >= 48 && code <= 57)){
            s1=s1+ch;
        }
    }
    let n=s1.length;
    for(let j=0;j<Math.floor(s1.length/2);j++){
        if(s1[j]!=s1[n-j-1]){
            return false
        }
    }
    return true
};