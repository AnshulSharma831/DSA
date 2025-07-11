/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let digit=0;
    let rev=0;
    let num=x;
    let neg=false;
    if(num<0){
        num=Math.abs(num);
        neg=true
    }
    while(num>0){
        digit=num%10;
        rev=(rev*10)+digit;
        num=Math.floor(num/10);
    }
    let limit = Math.pow(2,31);
    if(rev<-limit || rev>limit-1){
        return 0;
    }
    return (neg==true)? -rev:rev
};