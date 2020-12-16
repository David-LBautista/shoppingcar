 const carrito = document.querySelector('#carrito');
 const courseList = document.querySelector('#lista-cursos');
 const contenedorCarrito = document.querySelector('#lista-carrito tbody');
 const vaciarCarrito = document.querySelector('#vaciar-carrito');


 loadEventListeners();

 function loadEventListeners() {

     //* Agrega un curso al carrito
     courseList.addEventListener('click', agregarCurso);

 }








 //? FUNCIONES
 function agregarCurso(e) {
     console.log(e.target.classList);
 }