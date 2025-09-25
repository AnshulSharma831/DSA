
var MyStack = function() {
    this.q=[];
    this.r=0;
    this.f=0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q[this.r]=x;
    this.r+=1;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    
    let n=this.r-this.f;
    for(let i=0;i<n-1;i++){
        this.q[this.r]=this.q[this.f];
        this.r+=1;
        this.f+=1;
    }
    let ele=this.q[this.f];
    this.f+=1;
    return ele;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let ans=this.q[this.r-1];
    return ans;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return (this.r-this.f)<=0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */