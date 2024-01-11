// const upperIndexes = (str) => str.split('').map((item, idx) => item === item.toUpperCase() ? idx : null).filter(item => item !== null);
const upperIndexes = (str) => str.split('').reduce((acc, cur, index) => {
    if ( cur === cur.toUpperCase() ) acc.push(index);
    return acc;
}, []);

console.log(upperIndexes('RaZo'));