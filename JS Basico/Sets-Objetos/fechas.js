const fecha = new Date();

console.log(fecha);

// Year - Month - Day - Hour - Minute - Second - Millisecond
const fecha2 = new Date(1997, 11, 31);

console.log(fecha2);

// Indicar miliseconds a partir de la fecha que se estableció como inicial (1970-01-01 00:00:00). Negativo para fechas anteriores a 1970
const fecha3 = new Date(0);
console.log(fecha3);

const fecha4 = new Date("June 19, 1979 10:30:15")
console.log(fecha4);

// Comparar fechas - Convertir a milisegundos

console.log(fecha > fecha2);

console.log(fecha2.getTime() === fecha3.getTime());

// Obtener dia - mes - año de una fecha
// getDate() = dia
console.log(fecha.getDate())

// getMonth = mes - 1
console.log(fecha.getMonth() + 1)

// getFullYear = año
console.log(fecha.getFullYear());

// .toLocateDateString()
console.log(fecha.toLocaleDateString("en-GB"));
console.log(fecha.toLocaleDateString("en-US"));
