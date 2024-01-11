function getMiddle(s) {
	let middle = Math.floor(s.length / 2);
	return s.length % 2 === 0 ? result = s[middle - 1] + s[middle] : result = s[middle];
}

console.log(getMiddle("test"))
console.log(getMiddle("testing"))
console.log(getMiddle("middle"))
console.log(getMiddle("A"))