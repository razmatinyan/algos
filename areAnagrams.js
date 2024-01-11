function allAnagrams(array) {
    return array.map(str => str.split('').sort().join('')).every((str, index, array) => str === array[0]);
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd']));
console.log(allAnagrams(['abcd', 'bdXc', 'cabd']));