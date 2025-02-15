// percorrendo vetores
const cores = ['vermelho', 'verde', 'azul'];

for(const cor of cores){
    console.log(cor);
}

const pessoa = {
    nome: "Rafael",
    idade: 34,
    usuario: "professor",
};

for(const chave in pessoa){
    console.log(`${chave}: ${pessoa[chave]}`);
}

// Map
const mapa = new Map();
mapa.set('nome', 'Carlos');
mapa.set('idade', 30);
console.log(mapa.get('nome'));
console.log(mapa.get('idade'));

// WeakMap // conjunto de mapas
const obj = {
    id: 1
};

const weakMap = new WeakMap();
weakMap.set(obj, 'aluno 1');
console.log(weakMap.get(obj));

