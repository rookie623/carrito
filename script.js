const contenedorProductos = document.getElementById("productos");
const carrito = document.getElementById('carrito')
const carritoIcon = document.getElementById("carrito.ico")
const productosEnCarrito = []
let cantidadCarrito = productosEnCarrito.length

const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 1500,
    img: "https://placeimg.com/250/250/tech/sepia",
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 2500,
    img: "https://placeimg.com/250/250/tech/greyscale",
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 3500,
    img: "https://placeimg.com/250/250/tech",
  },
  {
    id: 4,
    nombre: "Producto 4",
    precio: 4500,
    img: "https://placeimg.com/250/250/any",
  },
  {
    id: 5,
    nombre: "Producto 5",
    precio: 5500,
    img: "https://placeimg.com/250/250/people",
  },
  {
    id: 6,
    nombre: "Producto 6",
    precio: 6500,
    img: "https://placeimg.com/250/250/nature",
  },
  {
    id: 7,
    nombre: "Producto 7",
    precio: 7500,
    img: "https://placeimg.com/250/250/arch",
  },
  {
    id: 8,
    nombre: "Producto 8",
    precio: 7500,
    img: "https://placeimg.com/250/250/animals",
  },
]


function eliminarProducto(id) {
  const productoRemover = document.getElementById(`${id}`)
  carrito.removeChild(productoRemover)
  document.getElementById("cantidad").innerHTML = --cantidadCarrito
  actualizarIcono()
}

const agregarAlCarrito = (id) => {
  const carritoHTML = document.getElementById("carrito")
  const productoElegido = productos.find((el) => el.id === id)
  carritoHTML.innerHTML += 
  `<div class="card" id="${productosEnCarrito.length + 1}">
    <img src=${productoElegido.img} />
    <h3 class="card-header">${productoElegido.nombre}</h3>
    <p class="card-text">Precio: $${productoElegido.precio}</p>
    <p class="card-text">Código: ${productoElegido.id}</p>
    <button onclick="eliminarProducto(${productosEnCarrito.length + 1})" class="btn btn-danger">Eliminar</button>
  </div>`
  productosEnCarrito.push(productoElegido)
  document.getElementById("cantidad").innerHTML = ++cantidadCarrito
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
    <img src="${prod.img}" alt="${prod.nombre}" class="card-img-top">
    <h3 class="card-header">${prod.nombre}</h3>
    <div class="card-body">
      <p class="card-text">Precio: $${prod.precio}</p>        
      <p class="card-text">Código: ${prod.id}</p>  
      <button class="btn btn-primary"onclick="agregarAlCarrito(${prod.id})">Agregar</button>
    </div>
  </div>`
})


