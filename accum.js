function accum(string) {
    let arr = string.toUpperCase().split('');
    let repeatArr = arr.map(function(el, i) {
        return el += el.repeat(i).toLowerCase();
    })
    return repeatArr.join('-');
}

const accum2 = string => 
    string
        .toUpperCase()
        .split('')
        .map((el, i) => `${el}${el.repeat(i).toLowerCase()}`)
        .join('-')

console.log(accum('abcd'));
console.log(accum2('abcd'));