/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let ob1={}
    let ob2={}
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
    for(let j=0;j<t.length;j++){
        if(t[j] in ob2){
            ob2[t[j]]+=1;
        }else{
            ob2[t[j]]=1;
        }
    }
    for(let key in ob1){
        if(key in ob2){
            if(ob1[key]!=ob2[key]){
                return false;
            }
        }else{
            return false;
        }
    }
    return true;
};