//Object表示一个对象
let a:Object;
a={};
a=function () {
    
}
//{}写法用来表示对象可以包含那些属性
//语法{属性名:属性值}
let b:{name:string,age?:number};

// b={name:'xdd'};
b={name:'xdd',};
//?在属性值后面加括号 表示可以有也可以没有

//[propName:string]:any表示可以是任意类型 后面的属性可以是任意类型
let c:{name:string,[propName:string]:any};
c={name:'asd',age:123};

/*
* 设置函数解构的类型声明
*   语法(形参1:类型，形参2:类型)=>返回值
* */
let d:(a:number,b:number)=>number;
/*d=function (n1:number,n2:number){
    return n1+n2;
}*/


//数组的类型声明  1：类型[]，2Array<类型>
//string[]表示存放的是一个字符串类型的数组
let e:string[];
e=['1','2','3'];
let f:number[];//表示数值数组

let g:Array<number>;
//g是一个数组 里面存放的是数字
// let obj:Array<object>;


/*
* 元组就是固定长度的数组
*   语法[类型，类型]
*
* */

let h:[string,string];
h=['1','2'];
/*
* enum枚举
*
*
*
* */
enum Gender{
    male,
    female
};
let i:{name:string,gender:Gender};
i={
    name:'xdd',
    // gender:'male'
    gender:Gender.female
}
console.log(i.gender===Gender.male);


let q:string|number;
//表示q是一个字符串或者数字
let w:string&number;
//表示&同时
let obj:{name:string}&{age:number};
obj={
    name:'xdd',
    age:123
};


//类型的别名
let k:1|2|3|4|5;
let j:1|2|3|4|5;
type myType=string;
let str:myType;
type lists=1|2|3|4|5;
let n:lists;
