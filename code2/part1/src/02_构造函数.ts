class Cat {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        //constructor被称为构造函数会在对象创建的时候调用
        this.name = name;
        this.age = age;
        //在实例方法中this指向当前的实例
        //在构造函数中当前对象就是我们新建的那个对象
        //可以通过this向新建的对象中添加对象
    }

    sayMiao() {
        //在方法中可以通过this表示调用当前方法的对象
        console.log(this.name, this);
    }

}
    const qiu = new Cat('qiuqiu', 2);
    const qiu1 = new Cat('gou', 3);
    const qiu2 = new Cat('qwe', 1);
    const qiu3 = new Cat('zxc', 4);
    const qiu5 = new Cat('qwe', 5);
    qiu.sayMiao();
    console.log(qiu);
    console.log(qiu1);
    console.log(qiu2);
    console.log(qiu2);
    console.log(qiu3);
    console.log(qiu5);