const datosPersonales = {
	nombre: 'Javier',
	apellido: 'Curto',
	edad: 43,
	altura: 186,
	eresDesarrollador: false,
};

let edad = datosPersonales.edad;

console.log(edad);

const listaDatosPersonales = [
	{
		nombre: 'Javier',
		apellido: 'Curto',
		edad: 43,
		altura: 186,
		eresDesarrollador: false,
	},
	{
		nombre: 'Antonio',
		apellido: 'Hernandez',
		edad: 38,
		altura: 166,
		eresDesarrollador: false,
	},
	{
		nombre: 'Manuel',
		apellido: 'Rivas',
		edad: 34,
		altura: 174,
		eresDesarrollador: true,
	}
];

const listaOrdenada = listaDatosPersonales.sort((a,b) => a.edad > b.edad);

console.log(listaOrdenada);
