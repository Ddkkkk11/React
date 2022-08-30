(function () {
    class Person {
        //TS可以在属性前添加属性的修饰符

        /*
        * public可以在任意位置访问 默认值
        * private 私有属性 只能在类的内部修改
        *       可以在类中添加方法可以被外部访问
        *
        *
        * */

        /*
        *
        * get方法和set方法被称为属性的存储器
        *
        * */
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        //获取属性的方法
        getName() {
            return this._name;
        };

        //设置属性
        setName(name: string) {
            this._name = name;
        };

        getAge() {
            return this._age;
        }

        setAge(value: number) {
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