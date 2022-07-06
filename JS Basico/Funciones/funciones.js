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

