function isUnique(string) {
    // for (let i = 0; i < string.length; i++) {
    //     const char = string[i];
    //     if ( string.lastIndexOf(char) !== i ) return false;
    // }
    // return true;

    // const set = new Set();
    // for (let i = 0; i < string.length; i++) {
    //     const char = string[i];

    //     if ( set.has(char) ) return false;
    //     else set.add(char);
    // }
    // return true;

    return new Set(string).size === string.length
}

console.log(isUnique('abcdef'));
console.log(isUnique('1234567'));
console.log(isUnique('abcABC'));
console.log(isUnique('abcadef'));