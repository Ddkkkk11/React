import './style/index.less';

//定义food类
        class  Food{
            //定义一个属性表示食物对应的颜色
            element:HTMLElement;
            constructor() {
                //获取页面中food元素将其值赋值给element
                    this.element    =document.getElementById('food')!;
            }

            //获取食物的坐标
            get X(){
                return this.element.offsetLeft;
            }
            //获取Y的坐标
            get Y(){
                    return this.element.offsetTop;
            }
            //修改食物位置
            change(){
                //蛇移动一次就是一格 10px 食物的坐标必须是整十
                  let top=Math.round(Math.random()*29)*10+'px';
                  let left= Math.round(Math.random()*29)*10+'px';
                    this.element.style.left=left;
                    this.element.style.top=top;
            }
   }
   //测试代码
const food=new Food();
console.log(food.X,food.Y);
food.change();
