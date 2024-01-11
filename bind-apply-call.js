function fn() {
    console.log(this, arguments);
}

const obj = {
    name: 'Razmik'
}
const newFn = fn.bind(obj, 'aaa');
console.log(newFn());

const obj2 = {
    name: 'Razmik'
}
fn.call(obj2, 'aaa');

const obj3 = {
    name: 'Razmik'
}
fn.apply(obj3, ['aaa']);