// let edadCliente = Number(prompt("Ingrese su edad para ingresar al establecimiento"))


// // CONDICIONAL IF/ELSE
// if(edadCliente == 18) {
//   alert("Mensaje 1")
// } else if (edadCliente > 28){
//   alert("Mensaje 2")
// } else {
//   alert("Mensaje 3")
// }

// // OPERADOR TERNARIO

// edadCliente >= 18 ? alert("Mensaje 1") : (edadCliente > 28) ? alert("Mensaje 2") : alert("Mensaje 3")

// // ESTRUCTURAS SWITCH/CASE

// const numeroDia = Number(prompt("Ingrese el número del día"))

// //           4
// switch (numeroDia) {
//   case 1:
//     alert("El número ingresado corresponde al día Lunes")
//     break;
//   case 2:
//     alert("El número ingresado corresponde al día Martes")
//     break;
//   case 3:
//     alert("El número ingresado corresponde al día Miércoles")
//     break;
//   case 4:
//     alert("El número ingresado corresponde al día Jueves")
//     break;
//   case 5:
//     alert("El número ingresado corresponde al día Viernes")
//     break;
//   case 6:
//     alert("El número ingresado corresponde al día Sábado")
//     break;
//   case 7:
//     alert("El número ingresado corresponde al día Domingo")
//     break;
//   default:
//     alert("El valor ingresado no corresponde a un día de la semana.")
//     break;
// }


/////////////////////////////////////////////////   ESTRUCTURAS CÍCLICAS   --------------------


// CICLO WHILE

// let cont = 0;

// 0, 1, 2, 3, 4

//////  4  <  5
// while (cont < 5) {
//   console.log(cont);
//   let edad = Number(prompt("Ingresa tu edad"))

//   if (edad >= 23) {
//     alert("Pertences al grupo mayor")
//   } else {
//     alert("Pertences al grupo menor")
//   }

//   cont++;
// }

// CICLO FOR

//(  contador   ; condición; incr.  )
// for (let index = 0; index < 5; index++) {
//   let sexo = prompt("Ingrese su sexo")

//   if (sexo === "M" || sexo === "m") {
//     alert("Sexo masculino")
//   } else if (sexo === "F" || sexo === "f") {
//     alert("Sexo femenino")
//   }
// }

// let numero = "18"
// let numeroV2 = 18


// console.log(numero === numeroV2)

// CICLO DO-WHILE


// while (cont < 5) {
//   console.log(cont);
//   let edad = Number(prompt("Ingresa tu edad"))

//   if (edad >= 23) {
//     alert("Pertences al grupo mayor")
//   } else {
//     alert("Pertences al grupo menor")
//   }

//   cont++;
// }

let cont = 0;


do {
  console.log(cont);
    let edad = Number(prompt("Ingresa tu edad"))
  
    if (edad >= 23) {
      alert("Pertences al grupo mayor")
    } else {
      alert("Pertences al grupo menor")
    }
  
    cont++;
} while (cont < 5);
