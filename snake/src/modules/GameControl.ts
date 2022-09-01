import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";


//控制所有的类
class GameControl{
        //定义三个属性
        snake:Snake;
        food:Food;
        scorePanel:ScorePanel;
        //创建一个属性来存储蛇按键按下的标识
        direction: string='';
        //创建一个属性来记录游戏是否结束
        isLive:boolean=false;
        constructor() {
            this.snake = new Snake();
            this.food = new Food();
            this.scorePanel = new ScorePanel();
            this.init();
        }
        //游戏初始化
        init(){
            //绑定键盘按键按下事件
            document.addEventListener('keydown',this.keyupHandler.bind(this));
            this.run();
        }
        //创建一个键盘按下的响应函数
      keyupHandler(e:KeyboardEvent){
            /*
            * ArrowU     ArrowLef    ArrowRigh   ArrowDown
            *赋值之前检查event.key是否合法(是否按到正确的按键)
            *
            *
            * */
      /*    console.log(e.key);
          console.log(this);*/
          this.direction = e.key;
      }
      //创建一个让蛇移动的方法
        run(){
            console.log('run调用了');
            console.log(this);
            /*
            * 根据方向(this.direction)来使得蛇的位置改变
            *
            *
            * */
            //获取蛇的坐标
            let X = this.snake.X;
            //困惑！！！ 因为给了direction默认值 所以一开始会走switch;
            // console.log(X)
            let Y = this.snake.Y;
            //根据按键方向修改X的值和Y值
            switch (this.direction){
                case 'ArrowUp':
                    //向上移动
                    Y -= 10;
                    break;
                case 'ArrowDown':
                    Y += 10;
                    break;
                case 'ArrowLeft':
                    X -= 10;
                    break;
                case 'ArrowRight':
                    X += 10;
                    break;
            }
            //修改蛇的位置
            this.snake.X = X;
            // console.log(X)
            this.snake.Y = Y;
            this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30);
        }
}
export  default GameControl;