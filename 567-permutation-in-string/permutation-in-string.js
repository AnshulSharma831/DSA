/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length>s2.length){ 
        return false;
    }
    let hashS= Array(26).fill(0);
    let hashW=Array(26).fill(0);
    let window_size=s1.length;
    for(let i=0;i<window_size;i++){
        hashS[s1.charCodeAt(i)-97]++;
        hashW[s2.charCodeAt(i)-97]++;
    }
    
    let i=0;
    let j=window_size-1;

    while(j<s2.length){
        if(isHashSame(hashS,hashW,window_size)){
            return true;
        }
        else{
            hashW[s2.charCodeAt(i)-97]--;
            i+=1;
            j+=1;
            if(j<s2.length){
                hashW[s2.charCodeAt(j)-97]++;
            }
        }
    }
    return false;

    function isHashSame(hashS,hashW,window_size){
        for(let i=0;i<26;i++){
            if(hashS[i]!==hashW[i]){
                return false;
            }
        }
        return true;
    }
};