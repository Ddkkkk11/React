"use strict";
//使用class关键字来定义一个类
/*
* 对象主要包含两种方法
*       属性：
*       方法：
*
* */
class Person {
    constructor() {
        /*
        * 直接定义的属性是实例属性 需要通过对象的实例去访问
        * 类属性或者静态属性需要使用 static无需创建对象可以直接通过类去访问
        *   Person.age
        * readonly开头的属性表示是一个只读的属性
        * static readonly 静态的只读属性
        * */
        //实例属性
        this.name = 'xdd';
    }
    //定义方法
    sayHello() {
        console.log('hello');
    }
}
Person.gender = 'male';
//在属性前使用static可以定义类属性（静态属性）
Person.age = 30;
const per = new Person();
console.log(per);
console.log(Person.age);
console.log(per.name);
// per.name='tom';
console.log(per.name);
// Person.age=20;
per.sayHello();
