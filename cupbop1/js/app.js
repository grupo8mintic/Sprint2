// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#menu');
let articulosCarrito = [];

console.log(listaCursos);

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso presionando agregar al carrito
    listaCursos.addEventListener('click', agregarCurso);


    //Eliminar cursosd el carrito
    carrito.addEventListener('click', eliminarCurso)

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
function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSelecionado = e.target.parentElement.parentElement;
        console.log(cursoSelecionado)
        leerDatosCurso(cursoSelecionado);
    }
}

//Eliminar un curso del carrito
function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        //Eliminar del arreglo articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML(); //Iterar sobre el carrito y mostar su HTML


    }
}


// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(platillo) {
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
                platillo.precio = platillo.precio + platillo.precio;
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

    console.log(articulosCarrito);

    carritoHTML();
}

// Muestra el carrito de compras en el HTML
function carritoHTML() {

    //Limpiar el HTML
    limpiarHTML();


    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
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
            <td style="
            padding-right: 20px;
        ">
                <a href="#" class="borrar-curso" data-id="${id}" > X </a>
            </td>
        `;


        //Agregar al HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })

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

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}