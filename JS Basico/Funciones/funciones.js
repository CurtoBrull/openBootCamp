function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

let nombre = 'Javier';

console.log();
console.log(saludar(nombre));

function despedir(nombre) {
	console.log(`Adios ${nombre}`);
}

let nombre2 = 'Antonio';

console.log(despedir(nombre2));

// Pasando objetos

let persona = {
	nombre: 'Javier',
	apellido: 'Curto',
};

function saludarPersona(obj) {
	console.log(`Hola ${obj.nombre} ${obj.apellido}`);
}

console.log(saludarPersona(persona));

// Propagacion en parametros

function imprimir(...parametros) {
	console.log(parametros)
}

imprimir(1,2,3,4,5,6, 'hola', { id: 5})

function suma(...nums) {
	return nums.reduce((a, b) => a + b);
}

const sum = suma(1,2,31,43);

console.log(sum);
