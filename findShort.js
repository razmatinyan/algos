const findShort = str => str.split(' ').sort((a, b) => a.length - b.length)[0];

console.log(findShort('The smallest word in sentence'));
console.log(findShort('just test string'));