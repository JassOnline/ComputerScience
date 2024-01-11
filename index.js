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
    let userInput = prompt("Escribe tus numeros separados con comas")
    let userRemplazable = prompt("Que numero sera reemplazado?")
    let userRemplazo = prompt("Que numero lo reemplazara?")

    let pilaRemplazable = userInput.split(",").map(function(item){
        return parseInt(item, 10)
    })

    let remplazable = parseInt(userRemplazable)
    let remplazo = parseInt(userRemplazo)

    i = pilaRemplazable.length

    while (i > 0){
        if(pilaRemplazable[i] == remplazable){
            pilaRemplazable[i] = remplazo
            break
        }else{
            i -= 1
        }
    }
    j = pilaRemplazable.length + i

    document.write(pilaRemplazable)
}

Reemplazar()