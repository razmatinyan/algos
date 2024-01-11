function uniqueValuesFromArrays(...arrays) {
    const array = [].concat(...arrays);
    const uniqueValues = [...new Set(array)];
    return uniqueValues;
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
const array3 = [3, 4, 5];

console.log(uniqueValuesFromArrays(array1, array2, array3));