(function () {
    //描述一个对象的类型
    type myType = {
        name: string,
        age: number,
    };


    /*
    * 接口就是用来定义一个类的结构
    * 用来定义一个类中应该包含那些属性和方法
    *       同时接口也可以当成声明去使用
    *       接口中的属性不能有实际的值
    *       接口只定义对象的结构而不考虑实际值
    *
    * */
    interface myInterface {
        name: string,
        age: number
    }

    interface myInterface {
        gender: string,
        male: boolean
    }

    /*
    * 接口可以在定义类的时候去限制类的结构
    *
    * */
    interface myInter {
        name: 'xdd',

        sayHello(): void
    }

    const obj: myInterface = {
        name: 'xdd',
        age: 21,
        gender: 'male',
        male: true
    }

})();