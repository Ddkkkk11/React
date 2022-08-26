//声明一个变量a 同时指定他的类型为number
var a;
a = 11;
/*a='';*/
console.log(a);
//a='asd' 报错 a的类型是number
var b;
b = '123';
//b=10;
console.log(typeof b);
//声明完变量直接赋值
var c = true;
var d = true;
d = false;
// d=123;
//如果变量和赋值是一起进行的 TS自动对变量进行类型校验
//js中是不考虑参数的类型和个数的
function f(a, b) {
    return a + b;
}

console.log(f(1, '2'));


