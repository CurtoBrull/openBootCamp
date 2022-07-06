// Generadoras function*

function* generarID() {
  let id = 0;
  while (true) {
    id++;
    if (id === 3) {
      return id;
    }
    yield id; // Se queda esperando la siguiente llamada de la funcion
  }
}

const gen = generarID();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next());
