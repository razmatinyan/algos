function deepCopy(obj) {
	if (obj === null || typeof obj !== 'object') {
		return obj;
	}
  
	if (Array.isArray(obj)) {
		return obj.map(deepCopy);
	}
  
	const copied = {};
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			copied[key] = deepCopy(obj[key]);
		}
	}
  
	return copied;
}
  
const originalObject = { key1: 'value1', key2: { nestedKey: 'nestedValue' } };

const copiedObject = deepCopy(originalObject);

copiedObject.key2.nestedKey = 'modifiedValue';

console.log(originalObject.key2.nestedKey); // 'nestedValue'
console.log(copiedObject.key2.nestedKey);   // 'modifiedValue'