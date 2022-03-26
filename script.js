const contenedorProductos = document.getElementById("productos");
const carrito = document.getElementById('carrito')

const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 1500,
    img: "https://via.placeholder.com/250",
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 2500,
    img: "https://via.placeholder.com/250",
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 3500,
    img: "https://via.placeholder.com/250",
  },
  {
    id: 4,
    nombre: "Producto 4",
    precio: 4500,
    img: "https://via.placeholder.com/250",
  },
  {
    id: 5,
    nombre: "Producto 5",
    precio: 5500,
    img: "https://via.placeholder.com/250",
  },
  {
    id: 6,
    nombre: "Producto 6",
    precio: 6500,
    img: "https://via.placeholder.com/250",
  },
  {
    id: 7,
    nombre: "Producto 7",
    precio: 7500,
    img: "https://via.placeholder.com/250",
  },
  {
    id: 7,
    nombre: "Producto 8",
    precio: 7500,
    img: "https://via.placeholder.com/250",
  },
];

let productosEnCarrito = [];
let cantidadCarrito = productosEnCarrito.length

function eliminarProducto(id) {
  const productoRemover = document.getElementById(`${id}`)
  carrito.removeChild(productoRemover)
  document.getElementById("cantidad").innerHTML = --cantidadCarrito
}

const agregarAlCarrito = (id) => {
  const carritoHTML = document.getElementById("carrito");
  const productoElegido = productos.find((el) => el.id === id);
  carritoHTML.innerHTML += `
      <div id="${productosEnCarrito.length + 1}">
        <img src=${productoElegido.img} />
        <h3 class="titulo">${productoElegido.nombre}</h3>
        <p class="strong">Precio: $${productoElegido.precio}</p>
        <p>Código: ${productoElegido.id}</p>
        <button onclick="eliminarProducto(${productosEnCarrito.length + 1})">Eliminar</button>
      </div>`
  productosEnCarrito.push(productoElegido);
  document.getElementById("cantidad").innerHTML = ++cantidadCarrito
};

productos.forEach((prod) => {
  contenedorProductos.innerHTML += `
        <div class="col">
        <img src=${prod.img} alt=""/>
        <h3 class="titulo">${prod.nombre}</h3>
        <p class="strong">Precio: $${prod.precio}</p>
        <p>Código: ${prod.id}</p>
        <button onclick="agregarAlCarrito(${prod.id})">Agregar</button>
        </div>
    `;
});


