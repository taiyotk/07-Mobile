function exibirDetalhesProduto(){
    return `Produto: ${produto.nome}, Preço: R$${produto.preco.toFixed(2)}, Estoque: ${produto.estoque} unidades, peso: ${produto.peso}.`;
}

const produto = {
    nome: "Amaciante Ipê",
    preco: 2.9,
    estoque: 1000,
    // peso: 200
};

console.log(exibirDetalhesProduto(produto));

// ForEach
const numeros = [15, 25, 35, 45, 55];

numeros.forEach(num => {
    console.log(`Número: ${num}`);
});

// map
const dobrado = numeros.map(num => num * 2);
console.log(dobrado); // [ 2, 4, 6, 8, 10 ]
console.log(numeros); // [ 1, 2, 3, 4, 5 ]

// filter // filtra/busca todos
const maioresQue30 = numeros.filter(num => num > 30);
console.log(maioresQue30);

// find // pega o primeiro elemento que correposnde a condição
const maiorQue40 = numeros.find(num => num > 40);
console.log("maiorQue40", maiorQue40);

// every //se todos correspondem a condição
// retorna booleano
const todosMaiores = numeros.every(num => num > 40);
console.log("todosMaiores", todosMaiores);

// some // se existe pelo menos um elemento que satisfaça a condição
const existeMaior = numeros.some(num => num > 50);
console.log("existeMaior", existeMaior);

