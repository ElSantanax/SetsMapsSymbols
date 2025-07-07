const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 321, 132, 412]);
const datos = new Map();

datos.set('nombre', 'José');
datos.set('profesion', 'Desarrollador Web');

// Default
for (let ciudad of ciudades) {
    console.log(ciudad);
}


for (let entry of ciudades.entries()) {
    console.log(entry);
}

// Values iterator
for (let value of ordenes.values()) {
    console.log(value);
}

// Keys iterator

for (let key of datos.keys()) {
    console.log(key);
}