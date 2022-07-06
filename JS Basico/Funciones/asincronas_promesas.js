// Asíncronas

function miAsinc() {
	// P.ej llamada a BD externa
}

const miPromesa = new Promise((resolve, reject) => {
	const i = Math.floor(Math.random() * 2);
	if (i != 0) {
		resolve();
	} else {
		reject();
	}
});

// Promesas

miPromesa
	.then(() => {
		console.log('Ejecutado correctamente');
	})
	.catch(() => {
		console.log('Error');
	})
	.finally(() => console.log('Siempre se ejecuta'));

  
