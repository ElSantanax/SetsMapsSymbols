
function creatIterado(carrito) {
    let i = 0

    return {
        siguiente: () => {
            const fin = (i >= carrito.length);
            const valor = !fin ? carrito[i++] : undefined;

            return {
                fin,
                valor
            }
        }
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// Utilizar el iterador
const recorrerCarrito = creatIterado(carrito);
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());