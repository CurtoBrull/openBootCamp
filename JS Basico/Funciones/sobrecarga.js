// Carga de funciones

// 1. global()
// 2. saludar() global()
// 3. hola() saludar() global()
// 4. saludar() global()
// 5. global()

function saludar() {
  // llamada a otra funcion
  hola();
};

function hola() {
  console.log(`Hola! Soy la funcion hola()`);
}

saludar();

// Sobrecarga - Stack Overflow

function recursiva() {
  recursiva();
}

