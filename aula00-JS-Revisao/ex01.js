// Exemplo 1: Variaveis (var, let e const)

// Usando var(escopo global/função) 

var nome = "Nome inicial";

if(true){
    var nome = "Maria";
    console.log(nome); // Maria
}

console.log("variavel nome fora do if ->" ,nome); // Maria

// Usando let

let nome = "João";

if(true){
    let nome = "Maria";
    console.log(nome); // Maria
}

console.log("variavel nome fora do if ->" ,nome); // João



