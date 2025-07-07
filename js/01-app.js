// Los set crean una lista de valores sin duplicados

const carrito = new Set();

// Agregar un nuevo elemento
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

// Eliminar un elemento
carrito.delete('Camisa');

// Saber la cantidad de elementos que existe en el carrito
console.log(carrito.size);

// Comprobar si un valor existe
console.log(carrito.has('Disco #4')); // False

// Eliminar *todos* los elementos del set 
// carrito.clear();

// Los set son iterrables
carrito.forEach(productor => {
    console.log(productor);
})

console.log(carrito);


// Ejemplo: Eliminar los duplicados el siguiente arreglo

const numeros = [10, 20, 30, 40, 50, 10, 20];
const noDuplicados = new Set(numeros)
console.log(noDuplicados);

const articulos = ['Camisa', 'camisa', 'Pantalón', 'Medias', 'medias']
const noDuplicados2 = new Set(articulos.map(a => a.toLocaleLowerCase()));
console.log(noDuplicados2);