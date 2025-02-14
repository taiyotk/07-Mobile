// Exemplo 1: Variaveis (var, let e const)

// Usando var(escopo global/função) 

var nome = "Nome inicial";
console.log(nome);

if(true){
    var nome = "Maria";
    // substitui a variavel nome
    console.log(nome); // Maria
}

// usando let

let idade = 10;
console.log(idade);

if(true){
    let idade = 15;
    console.log("idade no if = ", idade);
}
idade = 20;
console.log(idade);

console.log("variavel nome fora do if ->" ,nome); // Maria

// usando const 
const pi = 3.14;
console.log("pi ", pi);
if(true){
    const pi = 3.18;
    console.log("pi no if = ", pi);
}

/* // dá erro de atribuição de tipo
pi = "pi";
console.log(pi);
*/
// diferenca entre let e var -> escopo global

