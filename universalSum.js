/**
 * Universal sum
 */
function add(a, b) {
    if (!a) return add;
    if (!b) {
        return function sum(c) {
            if (!c) return sum;
            return a + c;
        }
    }
    return a + b;
}
  
console.log(add(20, 22)) // -> 42
console.log(add(20)(22, 22)) // -> 42

console.log(add(20)()(22)) // -> 42
console.log(add(20)()()()(22)) // -> 42
console.log(add(20)()()()()()()()()()()()(22)) // -> 42

console.log(add()(20)(22)) // -> 42
console.log(add()()()()(20)(22)) // -> 42
console.log(add()(20)()(22)) // -> 42
console.log(add()()()()()(20)()()()(22)) // -> 42