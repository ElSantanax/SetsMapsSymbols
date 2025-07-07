// WeakMap - no se pueden acceder a los valores con .get - no se puede iterar

const producto = {
    idProducto: 10
}

const weakMap = new WeakMap();
weakMap.set(producto, 'Monitor') // agregar
console.log(weakMap.get(producto)); // traer
console.log(weakMap.has(producto)); // ver si existe - true
console.log(weakMap);