var compra = ['Patatas', 'Huevos', 'Lechuga', 'Tomate', 'Agua'];

compra.unshift('Aceite de Girasol');

compra.shift();

var peliculas = [
	{
		titulo: 'El Señor de los Anillos: la Comunidad del Anillo',
		director: 'Peter Jackson',
		fecha: new Date("2001-01-26"),
	},
	{
		titulo: 'Los Odiosos Ocho',
		director: 'Quentin Tarantino',
		fecha: new Date("2016-05-04"),
	},
	{
		titulo: 'Moneyball: Rompiendo las reglas',
		director: 'Bennett Miller',
		fecha: new Date("2011-12-12"),
	},
];

var dateFilter = new Date("2010-01-01");

var peliculas2 = peliculas.filter(peliculas => peliculas.fecha > dateFilter);

var directores = peliculas.map(directores => directores.director);

var titulos = peliculas.map(titulos => titulos.titulo);

var directorTitulo = directores.concat(titulos);

var spread = [...directores, ...titulos];

console.log(compra);
console.log(peliculas);
console.log(peliculas2);
console.log(directores);
console.log(titulos);
console.log(directorTitulo);
console.log(spread);
