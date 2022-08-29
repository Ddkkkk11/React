(function () {
    //animal类
    class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        sayAll() {
            console.log('我在叫');
            console.log(this.name);
        }
    }


    //定义一个类

    //Dog继承animal类  class Dog  extends Anima animal为父类
    //使用继承后子类回拥有父亲所有的属性和代码
    //通过继承可以将所有的代码写到一个父类中
    //这样只需要写一次 这样所以子同事拥有父类属性
    //如果希望子类上面没有父类的方法 直接加就可以
    //如果子类中由父类的方法 则子类方法会覆盖父类的方法
    //子类覆盖父类的方法我们称为重写
    class Dog extends Animal {
        run(){
            console.log(this.name+'在跑')

        }

    };

    class Cat extends Animal {

    }

    const dog = new Dog('asd', 1);
    const cat = new Cat('zxc', 2);
    console.log(dog);
    dog.sayAll();
    cat.sayAll();

})();