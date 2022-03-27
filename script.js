const contenedorProductos = document.getElementById("productos");
const carrito = document.getElementById('carrito')
const carritoIcon = document.getElementById("carrito.ico")
const productosEnCarrito = [];
let cantidadCarrito = productosEnCarrito.length

const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 1500,
    img: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 2500,
    img: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 3500,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    nombre: "Producto 4",
    precio: 4500,
    img: "https://via.placeholder.com/200",
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
    img: "https://via.placeholder.com/300",
  },
  {
    id: 7,
    nombre: "Producto 7",
    precio: 7500,
    img: "https://via.placeholder.com/350",
  },
  {
    id: 8,
    nombre: "Producto 8",
    precio: 7500,
    img: "https://via.placeholder.com/400",
  },
];


function eliminarProducto(id) {
  const productoRemover = document.getElementById(`${id}`)
  carrito.removeChild(productoRemover)
  document.getElementById("cantidad").innerHTML = --cantidadCarrito
  actualizarIcono()
}

const agregarAlCarrito = (id) => {
  const carritoHTML = document.getElementById("carrito");
  const productoElegido = productos.find((el) => el.id === id);
  carritoHTML.innerHTML += 
  `<div class="card" id="${productosEnCarrito.length + 1}">
    <img src=${productoElegido.img} />
    <h3 class="card-header">${productoElegido.nombre}</h3>
    <p class="card-text">Precio: $${productoElegido.precio}</p>
    <p class="card-text">Código: ${productoElegido.id}</p>
    <button onclick="eliminarProducto(${productosEnCarrito.length + 1})" class="btn btn-danger">Eliminar</button>
  </div>`
  productosEnCarrito.push(productoElegido);
  document.getElementById("cantidad").innerHTML = ++cantidadCarrito
  const btnEliminar = document.getElementById(`btn-${id}`)
  btnEliminar.removeAttribute("hidden")
  actualizarIcono()
};

function actualizarIcono() {
  if (cantidadCarrito >= 1) {
    carritoIcon.classList.remove("fa-cart-shopping")
    carritoIcon.classList.add("fa-cart-plus")
  }else {
    carritoIcon.classList.add("fa-cart-shopping")
  }  
}

productos.forEach((prod) => {
  contenedorProductos.innerHTML += 
  `<div class="card" style="width: 18rem;">
    <img src=${prod.img} class="card-img-top" alt="...">
    <h3 class="card-header">${prod.nombre}</h3>
    <div class="card-body">
    <p class="card-text">Precio: $${prod.precio}</p>        
    <p class="card-text">Código: ${prod.id}</p>  
    <button class="btn btn-primary"onclick="agregarAlCarrito(${prod.id})">Agregar</button>
    <button id="btn-${prod.id}" onclick="eliminarProducto(${productosEnCarrito.length + 1})" class="btn btn-danger" hidden>Eliminar</button>
    </div>
   </div>`
});



