let miEdad = "18.5"
let isMarried = false

let miFuturaEdad = parseFloat(miEdad) + 10;

console.log(miFuturaEdad)

function intro() {
  let miNombre = "Sebastian"
  console.log(miEdad)
  console.log('Hola, mi nombre es ' + miNombre)
  console.log(`Hola, mi nombre es ${miNombre}`)
}

intro()


console.log("Hola, chicos")
console.log(miEdad);
console.log(`¿Cómo amanecieron?`)

// A continuación recibo la edad del usuario
//                   Number(            "20"               )                            
let edadDelUsuario = Number(prompt("Hola. ¿Cuál es tu edad?"))

let drunkWater = confirm("Hola. ¿Ya tomaste agua?")
console.log(drunkWater)

console.log(edadDelUsuario);
document.write(edadDelUsuario);
alert(`Tu edad es ${edadDelUsuario}`)



