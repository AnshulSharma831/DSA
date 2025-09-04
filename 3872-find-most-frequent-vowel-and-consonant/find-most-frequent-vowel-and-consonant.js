/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    //tc:- o(n)
    //spc:- o(1) as letters are 26 only and cannot go outof this range
    let map={};
    for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]]=1
        }
        else{
            map[s[i]]+=1;
        }
    }
    let vow=["a","e","i","o","u"];
    let vowsum=0;
    let consum=0;
    for(let i=0;i<s.length;i++){
        if(vow.includes(s[i])){
            vowsum=Math.max(vowsum,map[s[i]]);
        }
        else{
            consum=Math.max(consum,map[s[i]]);
        }
    }
    return vowsum+consum;

};