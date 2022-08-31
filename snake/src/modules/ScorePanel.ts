//定义表示记分牌的类
class  ScorePanel{
    // 用来技术分数和等级
    score=0;
    level=1;
    //设置变量限制等级
    maxLevel:number;
    //设置一格变量表示多少分升级
    upTo:number
    scoreElement:HTMLElement;
    levelElement:HTMLElement;
    constructor(maxLevel:number=10, upTo:number=10) {
        //初始化
        this.scoreElement=document.getElementById('score')!;
        this.levelElement=document.getElementById('level')!;
        this.maxLevel=maxLevel;
        this.upTo=upTo;
    }
    addScore(){
        this.score++;
        this.scoreElement.innerHTML=this.score+'';
        if (this.score%this.upTo===0){
            this.levelUp();
        }
    }
    //提升等级
    levelUp(){
        if (this.level<=this.maxLevel){
            this.levelElement.innerHTML=++this.level+'';
        }
    }
}
export  default ScorePanel;