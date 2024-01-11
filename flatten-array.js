function flatten(array) {
    const res = [];
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        if (Array.isArray(current)) {
            const flat = flatten(current);
            for (let j = 0; j < flat.length; j++) {
                res.push(flat[j]);
            }
        } else {
            res.push(current);
        }
    }
    return res;
}
console.log(flatten([[1], [[2, 3]], [[[4, [8, 9]]]]]));

function flattenArray(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);