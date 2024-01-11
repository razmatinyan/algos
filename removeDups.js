function removeDups(string) {
    // let chars = [];

    // for (let i = 0; i < string.length; i++) {
    //     if ( !chars.includes(string[i]) ) {
    //         chars.push(string[i]);
    //     }
    // }

    // return chars.join('');

    return Array.from(new Set(string)).join('');
}

console.log(removeDups('abcd'));
console.log(removeDups('aabbccddd'));
console.log(removeDups('abcddbca'));
console.log(removeDups('ababababdcdcdcd'));