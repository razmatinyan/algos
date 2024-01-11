const sumDigits = num => Math.abs(num).toString().split('').reduce((acc, current) => +acc + +current, 0);

console.log(sumDigits(99));
console.log(sumDigits(-32));