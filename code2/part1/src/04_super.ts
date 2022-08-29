(function () {
    class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;

        }
        sayName() {
            console.log('动物在叫')
        }
    }

    class Dog extends Animal{
        age:number;
        constructor(name:string,age:number) {
            //如果在子类写了构造函数在子类构造函数中必须对父类进调用
            super('xdd');
            this.age=age;
        }
            sayName() {
                //super就表示当前类的父类
                super.sayName();
            }

    }
})();
