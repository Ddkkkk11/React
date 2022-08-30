"use strict";
(function () {
    //ts中设置getter的方式
    class Person {
        constructor(name, age) {
            this._age = age;
            this._name = name;
        }
        get name() {
            console.log('get()方法调用了');
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            this._age = value;
        }
    }
    const per = new Person('xdd', 20);
    console.log(per.name);
    class A {
        constructor(num) {
            //protected受包含的属性，只能在当前类和子类中去访问
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
            console.log('asd');
        }
    }
    class Test {
        //可以把属性定义在构造函数中  不用再去赋值 相当于 this.name=name;this.age=age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new Test("asd", 123);
    console.log(c);
})();
