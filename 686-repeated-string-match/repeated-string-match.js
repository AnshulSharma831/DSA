/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    if(a.includes(b)){
        return 1;
    }
    let repeat=a;
    let count=1;
    while(repeat.length<b.length){
        repeat=a+repeat;
        count+=1;
    }
    if(repeat.includes(b)){
        return count;
    }
    repeat=a+repeat;
    count+=1;
    if(repeat.includes(b)){
        return count;
    }
    return -1;
};