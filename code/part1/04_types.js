//Object表示一个对象
var a;
a = {};
a = function () {
};
//{}写法用来表示对象可以包含那些属性
//语法{属性名:属性值}
var b;
// b={name:'xdd'};
b = { name: 'xdd' };
//?在属性值后面加括号 表示可以有也可以没有
//[propName:string]:any表示可以是任意类型 后面的属性可以是任意类型
var c;
c = { name: 'asd', age: 123 };
/*
* 设置函数解构的类型声明
*   语法(形参1:类型，形参2:类型)=>返回值
* */
var d;
/*d=function (n1:number,n2:number){
    return n1+n2;
}*/
//数组的类型声明  1：类型[]，2Array<类型>
//string[]表示存放的是一个字符串类型的数组
var e;
e = ['1', '2', '3'];
var f; //表示数值数组
var g;
//g是一个数组 里面存放的是数字
var obj;
/*
* 元组就是固定长度的数组
*   语法[类型，类型]
*
* */
var h;
h = ['1', '2'];
/*
* enum枚举
*
*
*
* */
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
;
var i;
i = {
    name: 'xdd',
    // gender:'male'
    gender: Gender.female
};
console.log(i.gender === Gender.male);
