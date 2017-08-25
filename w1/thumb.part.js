//测试类，测试plus方法是否+1
function PraiseButton(){
    this.index = 0;
}
PraiseButton.prototype.plus = function(){
    this.index++;
    return this.index;
}

