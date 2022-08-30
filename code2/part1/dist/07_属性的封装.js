"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        //获取属性的方法
        getName() {
            return this._name;
        }
        ;
        //设置属性
        setName(name) {
            this._name = name;
        }
        ;
        getAge() {
            return this._age;
        }
        setAge(value) {
            //判断年龄是否合法
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const per = new Person('xdd', 21);
    console.log(per.getName());
    /*  现在属性中是在对象中设置的，属性可以被任意值修改
            属性可以被任意修改 可能会导致对象中的数据变得非常不安全
    *
    *
    *
    * */
})();
