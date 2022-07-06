// Flecha - Anónimas

const array = [1, 2, 3, 4, 5, 6]

const array2 = array.map(valor => valor * 2);

console.log(array2);

const doble = valor => valor * 2;

const array3 = array.map(doble);

console.log(array3);
