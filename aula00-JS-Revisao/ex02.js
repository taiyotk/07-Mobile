function saudacao(nome){
    return "Olá " + nome + "!";
}
console.log(saudacao(34));

// função anonima
const soma = function (a, b){
    return a + b;
};

console.log(soma("teste", 15));

const multiplicacao = (a, b) => a * b;

console.log(multiplicacao(5, 10));
// console.log(multiplicacao(5, "10")); // esse ainda funciona também
// console.log(multiplicacao(5, "teste")); // esse dá nan



