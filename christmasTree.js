function christmasTree(height) {
    let stars = 1;
    for (let i = 1; i <= height; i++) {
        let spaces = (height - i);
        let printSpaces = " ".repeat(spaces);
        let printStars = "*".repeat(stars);
        console.log(printSpaces + printStars + printSpaces);
        stars += 2;
    }

    let trunkSpaces = ' '.repeat(height - 1);
    console.log(trunkSpaces + '|');
    console.log(trunkSpaces + '|');
}

christmasTree(10);