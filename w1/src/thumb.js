class PraiseButton {
    constructor(){
        this.index = 0;
    }
    plus() {
        this.index++;
        return this.index;
    }
}

class Thumb extends PraiseButton {
    thumbsUp() {
        this.plus();
        let result = document.getElementById('result');
        result.innerText = this.index;
        if (this.index >= 10) {
            this.changeColor();
        }
    }
    changeColor() {
        //替换颜色
        let color = 'gray';

        let children = document.getElementById('main').childNodes;
        for (let i = 0; i < children.length; i++) {
            if (children[i].nodeType === 1 && children[i].className != 'result') {
                children[i].style.background = color;
                children[i].style.border = color;
            }
        }
    }
}
export default Thumb


