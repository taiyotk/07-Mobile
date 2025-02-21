import React from 'react';

const nome = "João Silva";

const elemento = (
  <div>
    <h1>Olá {nome}!</h1>
    <p>Bem vindo!</p>
  </div>
);

function App(){
  return elemento;
}

export default App;