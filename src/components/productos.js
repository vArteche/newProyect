import lagoNess from '../assets/img/lagoness.jpg';
import tortugas from '../assets/img/tortugas.webp';
import homer from '../assets/img/homer.jpg';

const productos = [
  {
    id: 1,
    nombre: 'Ultimate Creature from the Black Lagoon (B&W)',
    descripcion: '7” Scale Action Figure Universal Monsters',
    categoria: 'terror',
    Image: lagoNess,
    stock: 10,
    precio: 500
  },
  {
    id: 2,
    nombre: 'Toony Classics The Joker',
    descripcion: ' 6″ Scale Action Figure DC Comics (Classic)',
    categoria: 'oldToons',
    Image: tortugas,
    stock: 10,
    precio: 500
  },
  {
    id: 3,
    nombre: 'Splinter',
    descripcion: '7” Scale Action Figures Teenage Mutant Ninja Turtles (Mirage Comics)',
    categoria: 'series',
    Image: homer,
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

export const obtenerItemId = (productoId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('ID buscado:', productoId);
            console.log('Lista de productos:', productos);

            const productoEncontrado = productos.find(prod => prod.id === productoId);

            if (productoEncontrado) {
                resolve(productoEncontrado);
            } else {
                reject(new Error(`Producto con ID ${productoId} no encontrado`));
            }
        }, 300);
    });
};

export const obtenerItemCat = (productoCat) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log('categoria buscada:', productoCat);
          console.log('Lista de productos:', productos);

          const productoEncontrado = productos.filter(prod => prod.categoria === productoCat);

          if (productoEncontrado) {
              resolve(productoEncontrado);
          } else {
              reject(new Error(`Producto con categoria ${productoCat} no encontrado`));
          }
      }, 300);
  });
};