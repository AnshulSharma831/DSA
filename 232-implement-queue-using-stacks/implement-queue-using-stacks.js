
var MyQueue = function() {
    this.s1=[];
    this.s2=[];
    this.t1=0;
    this.t2=0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1[this.t1]=x;
    this.t1+=1;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
     while(this.t1>1){
        this.s2[this.t2]=this.s1[this.t1-1];
        this.t2+=1;
        this.t1-=1;
    }
    let ele=this.s1[this.t1 - 1];
    this.t1-=1; 
    while(this.t2>0){
        this.s1[this.t1]=this.s2[this.t2 - 1];
        this.t1+=1;
        this.t2-=1;
    }
    return ele;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {

    if(this.t1===0) return undefined;
    while(this.t1>1){
        this.s2[this.t2]=this.s1[this.t1-1];
        this.t2+=1;
        this.t1-=1;
    }

    let ans=this.s1[this.t1-1];

    while(this.t2>0){
        this.s1[this.t1]=this.s2[this.t2-1];
        this.t1+=1;
        this.t2-=1;
    }

    return ans;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return (this.t1==0);
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */