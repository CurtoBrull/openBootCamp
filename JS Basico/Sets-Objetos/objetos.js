// Objetos

const obj = {
	id: 3,
	nombre: 'Javier',
	apellido: 'Curto',
	isDeveloper: false,
	peliculas_favoritas: ['El señor de los Anillos', 'JS en profundidad'],
  "4-juegos": [1,2,3,4],
};

console.log(obj.nombre);
console.log(obj["4-juegos"]);

// Llamar a propiedades con variables declaradas 
const propiedades = "isDeveloper"
console.log(obj[propiedades]);

// Replicar obj

const objDuplicado = obj; // Si lo hacemos así igualamos los 2 objetos, si modificamos uno se modifica el otro (están en la misma localización de la memoria). Esto pasa en objetos

// Replicar con spread operator
const obj2 = {...obj}
obj2.nombre = "Antonio";

console.log(obj.nombre);
console.log(obj2.nombre);

// Ordenar listas de objetos

const listaPeliculas = [
  {
    title: "Lo que el viento se llevó",
    year: 1939
  },
  {
    title: "Titanic",
    year: 1997
  },
  {
    title: "Moana",
    year: 2016
  },
  {
    title: "El efecto mariposa",
    year: 2004
  },
  {
    title: "TED",
    year: 2012
  }
]

const listaPeliculas2 = [...listaPeliculas];

console.log(listaPeliculas);

// .sort() -> Muta el valor de la lista original

listaPeliculas.sort((a, b) => a.year - b.year);
console.log(listaPeliculas);

listaPeliculas2.sort((a, b) => {
  if (a.title > b.title) {
    return 1;
  } else if (b.title > a.title) {
    return -1;
  }
});

console.log(listaPeliculas2);
