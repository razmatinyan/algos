const minMax = array => [Math.min(...array), Math.max(...array)];

const minMax2 = array => [Math.min.apply(null, array), Math.max.apply(null, array)];

const minMax3 = array => {
    let res = [];
    let minValue = Math.min.apply(null, array);
    let maxValue = Math.max.apply(null, array);
    return res.push(minValue, maxValue);
};

console.log(minMax([2, 1]));