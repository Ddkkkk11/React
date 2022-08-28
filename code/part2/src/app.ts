// export const hi='hello';
console.log(1);
console.log(2);
console.log(123)
console.log(213);
console.log(123123);
let a = 10;
console.log(a)

function fn(a: number, b: number) {
}

function f(this: Window) {
    console.log('this', this);
}

let box1 = document.getElementById('box1');
if (box1 !== null) {

    box1.addEventListener('click', () => {
        alert("hello");
    })
};
box1?.addEventListener('click',()=>{
        alert("asd")

})
