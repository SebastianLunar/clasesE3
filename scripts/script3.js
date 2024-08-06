// CLASE 8. Storage

// const nombreUsuario2 = localStorage.getItem('userName') 

// console.log(nombreUsuario2);

// const etiquetaNombre = document.getElementById('userName')

// etiquetaNombre.innerText = nombreUsuario2


// function eliminarNombre () {
//   console.log('Entré a eliminar nombre')
//   localStorage.removeItem('userName')
//   etiquetaNombre.innerText = 'Invitado'
// }

// function clearStorage () {
//   localStorage.clear();
// }


let user = JSON.parse(localStorage.getItem('usuarioString'));
console.log(user);

const etiqueta = document.getElementById('userInfo');

// user = {
//   "nombre": "Daniela",
//   "apellido": "Ortiz",
//   "email": "daniela435@gmail.com",
//   "telefono": "3145689012"
// }

etiqueta.innerHTML = `
    <td>${user.nombre}</td>
    <td>${user.apellido}</td>
    <td>${user.email}</td>
    <td>${user.telefono}</td>
`
