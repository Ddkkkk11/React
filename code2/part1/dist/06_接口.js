"use strict";
(function () {
    /*
    * 定义类的时候可以使类去实现一个接口
    *       实现接口就是使类满足接口的要求
    *
    *
    * */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('大家好');
        }
    }
    const clas = new MyClass('xdd');
    console.log('MyClass的name', clas);
    const obj = {
        name: 'xdd',
        age: 21,
        gender: 'male',
        male: true
    };
})();
