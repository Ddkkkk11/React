"use strict";
(function () {
    //以abstract是抽象类
    /*抽象类和其他类区别不大
    *   抽象类就是专门被继承的类
    *抽象类可以添加抽象方法
    *
    * */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayName() {
            //super就表示当前类的父类
            console.log('wang');
        }
    }
    class Cat extends Animal {
        sayName() {
            console.log('hello我是重写的方法');
        }
    }
    const dog = new Dog('xiaogou ');
    console.log(dog);
})();
