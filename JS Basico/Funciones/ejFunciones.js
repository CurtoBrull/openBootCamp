// Una función sin parámetros que devuelva siempre "true"

function verdadera() {
	return true;
}

console.log(verdadera());

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const miPromesa = new Promise(resolve => {
	setTimeout(() => {
		resolve('Hola soy una promesa');
	}, 5000);
});

miPromesa.then(mensaje => console.log(mensaje));

// Una función generadora de índices pares automáticos

function* generarIndices() {
  let i = 0;
  while (i <= 10) {
    i++;
    if ((i % 2) == 0) {
      yield i;
    }
  }
}

const gen = generarIndices();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
