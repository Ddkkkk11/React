    //可以直接使用字面量进行类型声明
    let a: 10;
    a = 10;
    // a=11;//报错

    //可以使用竖线 |来连接多个类型
    let b: 'male' | 'female';
    b = 'male';
    b = "female";
    // b='';
    let c: boolean | string;
    c = true;
    c = 'true';
    // c=123;报错

    //any表示的是任意的类型   一个变量设置为any后相当于对该变量关闭了TS类型的检测
    // 在使用TS中不建议使用any
    // let d:any;//显式any
    let d;//隐式any

    //声明变量如果不指定类型 则TS解析器会自动判断变量这个类型为any
    d = 10;
    d = 2 + '';
    d = true;

    let e: unknown;//表示未知类型的值
    e = 10;
    e = 'hello';
    e = true;

    let f: string;
    //d的值是any他可以赋值给任意变量 不会报错    f的类型本来是String  但是any赋值给String 时 不会报错
    f = d;
    e = 'hello';
    // unKnown  实际上就是一个类型安全的any   赋值给别的类型的值得时候会报错 但是any不会报错
    //    unknown类型的变量 不能直接赋值给其他变量


    if (typeof e === 'string') {
        f = e;
    }
    //类型断言
    f = e as string; //告诉编译器e就是字符串 而不是unknown  可以告诫编译器变量的实际类型

    /*
    *   语法：
    *  f=e as String;  变量as一个类型
    * f=<String>e;          <类型>变量
    *
    *
    * */
  /*  function fn(num) {
        if (num>0){
            return 123;
        }else
        {
            return true;
        }
    }
    fn(1)*/
    //表示函数无返回值
    function f1():void {
    }
    //never表示永远不会返回结果
    function f2():never {
        throw new Error('报错了');
    }
