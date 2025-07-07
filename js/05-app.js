// Symbol - No se pueden iterar - crean una propiedad unica - *Nunca* son iguales

const sym = Symbol();
const sym2 = Symbol();

// if (sym === sym2) {
//     console.log('Son iguales');
// } else {
//     console.log('No son iguales');
// }

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar
persona[nombre] = 'José';
persona[apellido] = 'Santana';

console.log(persona);


// Definir una descripcion del symbol

const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};

cliente['nombre'] = 'José'

console.log(cliente);
console.log(cliente[nombreCliente]);