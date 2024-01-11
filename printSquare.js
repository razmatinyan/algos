function printSquareBorder(sideLength) {
    for (let i = 0; i < sideLength; i++) {
        let line = '';
        for (let j = 0; j < sideLength; j++) {
            if (i === 0 || i === sideLength - 1 || j === 0 || j === sideLength - 1) {
                line += '* ';
            } else {
                line += '  ';
            }
        }
        console.log(line);
    }
}

// Change the argument to adjust the side length of the square
printSquareBorder(5);
