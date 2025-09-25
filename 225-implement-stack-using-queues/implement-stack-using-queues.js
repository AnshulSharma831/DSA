
var MyStack = function() {
    this.q1=[];
    this.q2=[];
    this.f1=0;
    this.r1=0;
    this.f2=0;
    this.r2=0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1[this.r1]=x;
    this.r1+=1;
    
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n=this.r1-this.f1;
    if(n===0) return undefined;

    for(let i=0;i<n-1;i++){
        this.q2[this.r2]=this.q1[this.f1];
        this.r2+=1;
        this.f1+=1;
    }
    let ele=this.q1[this.f1];
    this.f1+=1;
    this.q1=this.q2;
    this.f1=0;
    this.r1=this.r2;
    this.q2=[];
    this.r2=0;
    this.f2=0;
    return ele;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let top=this.q1[this.r1-1]
    return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return (this.r1-this.f1)<=0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */