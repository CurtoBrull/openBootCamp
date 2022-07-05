const array = [1, 2, 3, 4, 1, 2, 3, 4,"hola", { id: 5}, { id: 5}];

// Quita valores duplicados
const miSet = new Set(array);
const miSet2 = new Set(array);

console.log(array);
console.log(miSet);


// .add() añadir valores al array siempre que no esten duplicados en el set

miSet.add(9);
miSet.add(4);

console.log(miSet);

// delete()

miSet2.delete("hola");
console.log(miSet2);

// clear()

miSet2.clear();
console.log(miSet2);


// .has()
console.log(miSet.has(2));
console.log(miSet.has(40));

// .size es un metodo por lo que no usa paréntesis
console.log(miSet.size);

// Iteración Set

miSet.forEach((valor) => {
    console.log(valor);
});

const iterator_miSet = miSet.values()
console.log(iterator_miSet);

const ar_miSet = [...miSet]
console.log(ar_miSet)
