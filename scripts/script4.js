// // Arreglos vectoriales

// const weekdays = [
//   'Lunes', // 0
//   'Martes', // 1
//   'Miércoles', // 2
//   'Jueves', // 3
//   'Viernes', // 4
//   'Sábado', // 5
//   'Domingo' // 6
// ]

// console.log(weekdays[2])

// // Arreglos matriciales (de tipo matriz)

// const estudiantes = [ 
//   // 0
//   [
//     'Isabella', 
//     'Hanny',
//     'Yesenia'
//   ],
//   // 1
//   [
//     'Juanse',
//     'Julian',
//     'Victor',
//     'Miguel',
//     'William'
//   ]
// ]

// console.log(estudiantes[1][1])


// //-----------> 0-Métodos para modificar estructura <------------

// // .push: Agrega al final de mi Array

// weekdays.push('Lunes2')

// console.log(weekdays);

// // .unshift: Agrega al inicio de mi Array

// weekdays.unshift('Domingo0')

// console.log(weekdays);

// // .pop: Elimina el último elemento de mi Array

// weekdays.pop()
// console.log(weekdays)

// // .shift: Elimina el primer elemento de mi Array

// weekdays.shift()
// console.log(weekdays)

// // .splice: Elimina o agrega elementos de mi Array
// // .splice:    (indice desde donde empieza a modificar, cuantos elementos eliminar, elementos a añadir)
// weekdays.splice(3, 0, 'Entre miercoles y jueves')
// console.log(weekdays)


// //-----------> 1-Métodos de iteración <------------

// // .forEach: Itera sobre cada elemento del Array, y ejecuta las instrucciones que determiniemos

// const verduras = ['tomate', 'cebolla', 'pepino', 'lechuga']

// verduras.forEach((verdura, index) => {
//   index == 0 ? console.log('Mis verduras son las siguientes: ') : ''
//   console.log(verdura)
// })

// // .map: Itera los elementos de mi arreglo, mutándolo en el proceso

// const verduras2 = verduras.map(verdura => `${verdura} de exportación`)
// console.log(verduras2);

// // Ejercicio: Tengo una lista de precios de mis verduras. Por temporada, se aplicará un 23% de descuento.
// // Crear una nueva liita con esos nuevos precios con descuento aplicado.

// const preciosBase = [
//   1500,
//   2600,
//   3700,
//   900
// ]

// // Usando .forEach
// const preciosConDescuento = []
// preciosBase.forEach(preciosBase => preciosBase > 1000 ? preciosConDescuento.push(preciosBase * 0.23) : preciosConDescuento.push(preciosBase))

// console.log(preciosConDescuento)

// // Usando .map
// const preciosBasePocentaje = preciosBase.map(preciosBase => preciosBase > 1000 ? preciosBase * 0.23 : preciosBase)

// console.log(preciosBasePocentaje)

// //-----------> 2-Métodos de búsqueda <------------

// // .find: Busca y devuelve el **PRIMER** elemento de un arreglo que cumpla con la condición o premisa especificada.

// // Buscar elementos que superen los $2000 del arreglo 'preciosBase'

// preciosBase.find(precio => precio > 2000)

// console.log(preciosBase.find(precio => precio > 2000))

// // .filter: Me duevelve un nuevo arreglo con las condiciones establecidas.

// const preciosADescontar = preciosBase.filter(precio => precio > 1000)
// console.log(preciosADescontar)

// // .some: Comprobar si al menos un elemento cumple con una condición dada

// const existe = preciosConDescuento.some(element => element % 2 === 0)

// console.log(existe)

// // .every: Comprobar si TODOS los elementos del arreglo cumplen con una condición dada

// const existen = preciosConDescuento.every(element => element % 2 === 0)

// console.log(existen)

// //-----------> 3-Métodos de transformación <------------

// // .reduce
// // .sort

// // EXTRA: Métodos de inclusión

// console.log(verduras.includes('cebolla'))

const formulario = document.getElementById('form')
const contCitas = document.getElementById('citas')
let citas = []

function eliminar(id) {
  const newCitas = citas.filter(citas => citas.id !== id)
  citas = newCitas;
  mostrarCitas();
}


function mostrarCitas() {
  contCitas.innerHTML = ''
  citas.forEach(cita => {
    const newTr = document.createElement('tr')
    newTr.innerHTML += `
      <td>${cita.nombre}</td>
      <td>${cita.fecha}</td>
      <td>${cita.hora}</td>
      <td>${cita.motivo}</td>
      <td>
        <button class="btnDelete" id="${cita.id}">
          Eliminar
        </button>
      </td>
    `
    const deleteButton = newTr.querySelector('.btnDelete')
    deleteButton.addEventListener('click', () => eliminar(deleteButton.id))


    contCitas.appendChild(newTr)
  })
}

formulario.addEventListener('submit', e => {
  e.preventDefault();

  const nombre = document.getElementById('name').value;
  const fecha = document.getElementById('date').value;
  const hora = document.getElementById('time').value;
  const motivo = document.getElementById('cause').value;

  const cita = {
    id: crypto.randomUUID(),
    nombre,
    fecha,
    hora,
    motivo
  }

  citas.push(cita)
  mostrarCitas()

  formulario.reset()
})

