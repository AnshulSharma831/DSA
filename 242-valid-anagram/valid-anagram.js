/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let ob1={}
 
    if(s.length!=t.length){
        return false;
    }
    for(let i=0;i<s.length;i++){
        if(s[i] in ob1){
            ob1[s[i]]+=1;
        }else{
            ob1[s[i]]=1;
        }
    }
    
    for(let i=0;i<t.length;i++){
        if(!ob1[t[i]] || ob1[t[i]]<0){
            return false;
        }else{
            ob1[t[i]]--;
        }
    }
    
    return true;
};