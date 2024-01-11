const toInitial = fullname => fullname.split(' ').map(str => `${str.slice(0, 1).toUpperCase()}.`).join('');

console.log(toInitial('Raz Matinyan'));