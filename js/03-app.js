// Maps toman una llave y un valor - si son iterrable

const cliente = new Map();

//           llave  |  Valor
cliente.set('nombre', 'José');
cliente.set('tipo', 'Premiun');
cliente.set('saldo', 500);

// Saber la existe de elementos
console.log(cliente.has('nombre')); // true

console.log(cliente.get('tipo')); // Traer un valor
console.log(cliente);

cliente.delete('saldo'); // Elimina un elemento
cliente.clear(); // Elimina todo 
console.log(cliente);

// Ejemplo
const paciente = new Map([['nombre', 'José'], ['cuarto', 'disponible']]);
paciente.set('dr', 'Pepe');
console.log(paciente);

paciente.forEach(datos => {
    console.log(datos);
})