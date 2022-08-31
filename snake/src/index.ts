import './style/index.less';

/*
   //测试代码

*/
import Food from './modules/Food';
import ScorePanel from './modules/ScorePanel';


const food=new Food();
console.log(food.X,food.Y);
food.change();
const sco=new ScorePanel();
    sco.addScore();