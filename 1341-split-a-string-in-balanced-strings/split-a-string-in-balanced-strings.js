/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count=0;
    let splitcount=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=="R"){
            count+=1
        }else if(s[i]=="L"){
            count-=1;
        }
        if(count==0){
            splitcount+=1;
        }
    }
    return splitcount;
};