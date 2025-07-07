// WeakSet - No son iterables - No se le pueden agregar elementos nuevos

const weakSet = new WeakSet();

const cliente = {
    nombre: 'José',
    saldo: 500
}

const nombre = 'José'

// No existe el .add
weakSet.add(cliente); // Error
weakSet.add(nombre);  // Error



console.log(weakSet);
