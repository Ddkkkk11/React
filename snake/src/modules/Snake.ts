
class Snake{
        //获取表示蛇的元素
    head: HTMLDivElement;
    bodies:HTMLCollection;
    //获取蛇的容器
    element:HTMLDivElement;
    constructor() {
        this.element=<HTMLDivElement>document.getElementById('snake');
        this.head = <HTMLDivElement>document.querySelector('#snake >div');
        this.bodies = this.element.getElementsByTagName('div');
    }
    //获取蛇头的坐标
    get X(){
        return this.head.offsetLeft;

    }
    //获取蛇头Y的坐标

    get Y(){
        return this.head.offsetTop;
    }
    //设置蛇头坐标
    set X(value){
         this.head.style.left = value+'px';
    }
    set Y(value){
        this.head.style.top = value+'';
    }
    //add蛇的长度
        addLength(){
            //向element添加元素
        this.element.insertAdjacentHTML('beforeend','<div></div>');

        }

}

export  default  Snake;
