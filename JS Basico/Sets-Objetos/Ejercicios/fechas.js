const hoy = new Date();

console.log(hoy);

const nacimiento = new Date(1979, 5, 19);

console.log(nacimiento);

var compararFechas = hoy > nacimiento;
console.log(compararFechas);

const dia = nacimiento.getDate();
console.log(dia);

const mes = nacimiento.getMonth();
console.log(mes + 1);

const anyo = nacimiento.getFullYear();
console.log(anyo);
