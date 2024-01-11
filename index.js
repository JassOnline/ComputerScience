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

function Reemplazar(){
    var userInput = prompt("Escribe tus numeros separados con comas")
    var remplazable = prompt("Que numero sera reemplazado?")
    var remplazo = prompt("Que numero lo reemplazara?")

    var pilaRemplazable = userInput.split(",").map(function(item){
        return parseInt(item, 10)
    })

    document.write(2 + pilaRemplazable[1])

//     i = pilaRemplazable.length

//     while (i > 0){
//         if(pilaRemplazable[i] == remplazable){
//             pilaRemplazable[i] = remplazo
//         }else{
//             i - 1
//         }
//         break
//     }
//     j = pilaRemplazable.length + i

//     document.write(pilaRemplazable)
// }
}
Reemplazar()