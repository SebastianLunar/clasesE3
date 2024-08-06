// let nombreUsuario = prompt('Ingresa tu nombre')

// localStorage.setItem('userName', nombreUsuario)

const form = document.getElementById('formulario1');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let email = document.getElementById('email').value;
  let telefono = document.getElementById('telefono').value;

  let usuario = {
    nombre,
    apellido,
    email,
    telefono
  }
  console.log(usuario);
  console.log(JSON.stringify(usuario));
  console.log(typeof JSON.stringify(usuario));
  
  localStorage.setItem('usuario', usuario);
  localStorage.setItem('usuarioString', JSON.stringify(usuario))  
})