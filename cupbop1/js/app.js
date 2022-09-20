// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const contenedorTotal = document.querySelector('#carrito .total_menu');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaPlatillos = document.querySelector('#menu');
let articulosCarrito = [];
console.log(contenedorTotal);

console.log(listaPlatillos);

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso presionando agregar al carrito
    listaPlatillos.addEventListener('click', agregarPlatillo);


    //Eliminar cursosd el carrito
    carrito.addEventListener('click', eliminarPlatillo)

    //Muesetra los cursos del Local Storage
/*     document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    }) */
    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; //Reseteamos el arreglo

        limpiarHTML(); //Eliminamos todo el HTML
    })
}


//Funciones
function agregarPlatillo(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const platilloSeleccionado = e.target.parentElement.parentElement.parentElement;
        console.log(platilloSeleccionado)
        leerDatosPlatillo(platilloSeleccionado);
    }
}

//Eliminar un platillo del carrito
function eliminarPlatillo(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const platilloId = e.target.getAttribute('data-id');

        //Eliminar del arreglo articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(platillo => platillo.id !== platilloId);

        carritoHTML(); //Iterar sobre el carrito y mostar su HTML


    }
}


// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosPlatillo(platillo) {
    //console.log(curso);

    //crear un objeto con el contenido del curso actual
    const infoPlatillo = {
        imagen: platillo.querySelector('img').src,
        titulo: platillo.querySelector('h4').textContent,
        precio: parseFloat(platillo.querySelector('span').textContent),
        id: platillo.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    console.log(infoPlatillo);
    //Revisa si un elemnento ya existe en el carrito
    const existe = articulosCarrito.some(platillo => platillo.id === infoPlatillo.id);
    if (existe) {
        //Actualizamos la cantidad
        const platillos = articulosCarrito.map(platillo => {
            if (platillo.id === infoPlatillo.id) {
                platillo.cantidad++;
                return platillo; //Retorna el objeto actualizado
            } else {
                return platillo; //Retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [...platillos];

    } else {
        //Agregar elementos o cursos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoPlatillo];
    }
    carritoHTML();
}

// Muestra el carrito de compras en el HTML

function carritoHTML() {

    //Limpiar el HTML
    limpiarHTML();
    //Recorre el carrito y genera el HTML
    let totalGoods = 0;
    articulosCarrito.forEach(platillo => {
        const { imagen, titulo, precio, cantidad, id } = platillo;
        let total = precio * cantidad;
        totalGoods = totalGoods + total;
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td style="
            padding-right: 20px;
        ">
                <img src="${imagen}" width="100">
            </td>
            <td style="
            padding-right: 20px;
        ">${titulo}</td>
            <td style="
            padding-right: 20px;
        ">$${precio}</td>
            <td style="
            padding-right: 20px;
        ">${cantidad}</td>
        </td>
            <td style="
            padding-right: 20px;
        ">${total}</td>
            <td style="
            padding-right: 20px;
        ">
                <a href="#" class="borrar-curso" data-id="${id}" > X </a>
            </td>
        `;
        //Agregar al HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
    //agregar el total al carrito   
    const rowTotal = document.createElement('span');
    rowTotal.innerHTML = `
        ${totalGoods}`;
    contenedorTotal.appendChild(rowTotal);
    

    //Sincronizar con storage
    //sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}


// Elimina los cursos del tbody
function limpiarHTML() {
    //Forma lenta
    //contenedorCarrito.innerHTML = '';
    while (contenedorCarrito.firstChild ) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

    while (contenedorTotal.firstChild ) {
        contenedorTotal.removeChild(contenedorTotal.firstChild);
    }

}


