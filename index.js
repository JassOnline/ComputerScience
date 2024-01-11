// function Pila(){
//     var inputPila = prompt("Escribe tus valores separados con comas")

//     var retorno = prompt("Cuantos valores se retornaran?")

//     var pila = inputPila.split(",", retorno)

//     if(pila.length >= retorno){
//     document.write(pila)
//     }else{
//     document.write("No es posible traer mas datos de los que hay")
//     }
// }

// Pila()

// function Reemplazar(){
//     let userInput = prompt("Escribe tus numeros separados con comas")
//     let userRemplazable = prompt("Que numero sera reemplazado?")
//     let userRemplazo = prompt("Que numero lo reemplazara?")

//     let pilaRemplazable = userInput.split(",").map(function(item){
//         return parseInt(item, 10)
//     })

//     let remplazable = parseInt(userRemplazable)
//     let remplazo = parseInt(userRemplazo)


//     console.log("antes " + pilaRemplazable)
//     //aqui se remplaza el elemento más nuevo por el que dijo el usuario
//     i = pilaRemplazable.length

//     while (i > -1){
//         if(pilaRemplazable[i] == remplazable){
//             pilaRemplazable[i] = remplazo
//             break
//         }
//          i -= 1
        
//     }
//     console.log("despues " + pilaRemplazable)
//     //borramos todos los elementos nuevos hasta llegar al remplazado
    
//     for(var j = (pilaRemplazable.length - i)-1; j--;){
//         pilaRemplazable.pop()
//     }

//     document.write(pilaRemplazable)
// }

// Reemplazar()

// function Recorrido (){
//     let userOrigen = prompt("De donde deseas salir?")
//     let userDestino = prompt("A donde quieres llegar")

//     let userParadas = prompt("Separado por comas, que paradas habra en el recorrido?")

//     let paradas = userParadas.split(",")

//     let recorrido = userOrigen + ", " + paradas + ", " + userDestino

//     console.log("El recorrido consiste en " + recorrido)
    
//     //Regreso
//     console.log("Y el camino de regreso " + userDestino + ", " + paradas.reverse() + ", " + userOrigen)
// }

// Recorrido()

function Contenedores(){
    
    let contenedores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    i = contenedores.length

    let userContenedor = prompt("Escriba el numero del contenedor que desea retirar")
    let contenedorRetirar = parseInt(userContenedor)
  
    let pilaTemporal = []

    console.log(contenedores)
    console.log(pilaTemporal)

    while (contenedores[i] != contenedorRetirar){
        pilaTemporal.push(contenedores[i])
        contenedores.pop()
        break
    } i --

    // for (i; i =! contenedorRetirar; i-- ){
    //     pilaTemporal.push(contenedores[i])
    //     contenedores.pop()
    // }

    console.log(i + " length")
    console.log(pilaTemporal + " datos removidos para sacar el deseado")
    console.log(contenedorRetirar + " contenedor retirado")
    console.log(contenedores + " lista actual de contenedores")
}

Contenedores()