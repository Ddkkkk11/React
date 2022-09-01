import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
import food from "./Food";

//控制所有的类
class GameControl{
        //定义三个属性
        snake:Snake;
        food:Food;
        scorePanel:ScorePanel;
        //创建一个属性来存储蛇按键按下的标识
        direction: string='';
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

        }
        //创建一个键盘按下的响应函数
      keyupHandler(e:KeyboardEvent){
            /*
            * ArrowU     ArrowLef    ArrowRigh   ArrowDown
            *赋值之前检查event.key是否合法(是否按到正确的按键)
            * */
          console.log(e.key);
          console.log(this);
          this.direction = e.key;
      }
}
export  default GameControl;