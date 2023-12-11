
const productos = [
  {
    id: 1,
    nombre: 'Ultimate Creature from the Black Lagoon (B&W)',
    descripcion: '7” Scale Action Figure Universal Monsters',
    categoria: 'terror',
    Image: '/assets/img/lagoness.jpg',
    stock: 10,
    precio: 500
  },
  {
    id: 2,
    nombre: 'Toony Classics The Joker',
    descripcion: ' 6″ Scale Action Figure DC Comics (Classic)',
    categoria: 'oldToons',
    Image: '/assets/img/tortugas.webp',
    stock: 10,
    precio: 500
  },
  {
    id: 3,
    nombre: 'Splinter',
    descripcion: '7” Scale Action Figures Teenage Mutant Ninja Turtles (Mirage Comics)',
    categoria: 'series',
    Image: '/assets/img/homer.jpg',
    stock: 10,
    precio: 500
  },
];

export default productos;

export const obtenerItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 300);
  });
};

export const obtenerItemId = (itemId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productoEncontrado = productos.find(prod => prod.id == itemId);
            console.log(productoEncontrado)

            if (productoEncontrado) {
                resolve(productoEncontrado);
            } else {
                reject(new Error(`Producto con ID ${itemId} no encontrado`));
            }
        }, 300);
    });
};

export const obtenerItemCat = (productoCat) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {

          const productoEncontrado = productos.filter(prod => prod.categoria === productoCat);

          if (productoEncontrado) {
              resolve(productoEncontrado);
          } else {
              reject(new Error(`Producto con categoria ${productoCat} no encontrado`));
          }
      }, 300);
  });
};