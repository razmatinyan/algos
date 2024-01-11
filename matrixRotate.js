const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function rotate(source) {
    const rotated = source[0].map(_ => []);

    for (let i = 0; i < source.length; i++) {
        for (let j = 0; j < source[i].length; j++) {
            rotated[j][(source.length - 1) - i] = source[i][j];
        }
    }

    return rotated;
}

function print(array) {
    array.forEach(i => console.log(i));
}

print(rotate(matrix));