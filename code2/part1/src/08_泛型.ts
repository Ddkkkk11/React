function fn(a: number): number {
    return a;
}

/*
* 在定义函数或者类时遇到类型不明确的时候我们就可以使用泛型 (指定类型相同的)
*
*
* */
function f<K>(a: K): K {
    return a;
}

//泛型可以同时指定多个

const result = f('asd');//不指定泛型TS会自动推断类型
const result1 = f<string>('hello');//指定泛型
function fn2<K, L>(a: K, b: L) {
    console.log(b);
    return a;
}

fn2<number, string>(123, '123');

interface Inter {
    length: number;
}

function f1<T extends Inter>(a: T): number {
    return a.length;
}

// <T extends Inner>表示泛型必须是Inter必须是Inter的实现类(子类)
f1('asdzxcxzcccccccccccc');
f1({length: 10});

class Myclass<T> {
    name: T;
    constructor(name: T) {
        this.name = name;
    }
}

const cla = new Myclass<string>('1班');