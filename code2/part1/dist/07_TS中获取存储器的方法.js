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
    }
    const per = new Person('xdd', 20);
    console.log(per.name);
})();
