const array = ['hola', 1, true, undefined];

// Tradicional
for (let index = 0; index < array.length; index++) {
	console.log(array[index]);
}

// ES6 foreach

const arrayNums = [9, 22, 56, 554, 54, 566];
let suma = 0;

arrayNums.forEach(valor => {
	console.log(valor);
	suma += valor;
});

console.log(suma);

// Find

const listaObj = [
	{ name: 'Javier', age: 43 },
	{ name: 'Loli', age: 49 },
	{ name: 'Izhan', age: 14 },
	{ name: 'Iris', age: 10 },
];

// const obj = listaObj.find(valor => {
//   if (valor.name === "Javier") {
//     return valor.edad;
//   }
// });

const obj = listaObj.find(valor => valor.name === 'Javier');
console.log(obj.age);

// Deconstrucción
const { age } = listaObj.find(valor => valor.name === 'Loli');
console.log(age);

// Map

const ciudades = ["Almería", "Málaga", "Granada"];

const listaCiudades = ciudades.map((ciudad, index) =>
  `${index + 1}- ${ciudad}`
);

console.log(listaCiudades);

// Filter

// const adultos = listaObj.filter(obj => {
//   if (obj.age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// })

const adultos = listaObj.filter(obj => obj.age > 18);

console.log(adultos)

const newList = listaObj.filter(obj => obj.name !== "Javier");

console.log(newList)

// Reduce

const sum = arrayNums.reduce((acumulate, current, index, original) => {
  console.log(acumulate);
  console.log(current);
  console.log(index);
  console.log(original);
  return acumulate + current;
});

console.log(sum);
