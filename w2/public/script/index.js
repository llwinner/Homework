class PraiseButton {
    constructor(num, element) {
        this.num = num;
        this.element = element;
        this.lastTime = 0;
    }

    clickAction() {
        this.element.click(() => {
            //判断是否在1秒之内
            let sub = parseInt((Date.now() - this.lastTime) / (1000));
            if (sub > 0.5 || this.lastTime == 0) {
                if (this.num < 10) {
                    this.element.css('-webkit-filter', 'grayscale(0)');
                    $('#animation').addClass('num');
                    this.num = add(this.num);
                    mysqlAdd();
                    setTimeout(function () {
                        $('#animation').removeClass('num');
                    }, 200);
                } else {
                    this.element.css('-webkit-filter', 'grayscale(1)');
                    this.num = 0;
                }
                console.log(this.num);
            }
            this.lastTime = Date.now();
        })
    }
}


class Thumb extends PraiseButton {
    constructor(num, element) {
        super(num, element);
    }
}
export
    default {
        Thumb
    }
// let f= new Thumb(0,$('#thumb'));
// f.clickAction();