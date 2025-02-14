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
const numeros = [1,2,3,4,5];

numeros.forEach(num => {
    console.log(`Número: ${num}`);
});

// map
const dobrado = numeros.map(num => num * 2);
console.log(dobrado); // [ 2, 4, 6, 8, 10 ]
console.log(numeros); // [ 1, 2, 3, 4, 5 ]

