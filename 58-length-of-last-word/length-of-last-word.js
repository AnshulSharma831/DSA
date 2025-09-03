/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let currsum=0;
    let sum=0;
    s=s+" ";
    let len=s.length;
    for(let i=0;i<len;i++){
        if((s[i]==" " && sum!=0)){
            currsum=sum;
            sum=0;
        }
        else if(s[i]==" "){
            sum=0;
        }
        else{
            sum+=1;
        }
    }
    return currsum;
};