const NOMBRE = 'Javier';

const APELLIDOS = 'Curto Brull';

var estudiante = NOMBRE + ' ' + APELLIDOS;

var estudianteMayus = estudiante.toUpperCase();

var estudianteMinus = estudiante.toLowerCase();

var long = estudiante.length;

var firstLetter = estudiante.charAt(0);

var lastLetter = estudiante.charAt(long - 1);

var noSpaces = estudiante.split(' ').join('');

var contains = estudiante.includes(NOMBRE);
