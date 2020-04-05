const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]
// function soma...

function soma(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};
var usuario2 = { ...usuario,
  nome: 'Gabriel'
};
console.log(usuario2);
var usuario3 = {
  endereco: {
    cidade: 'Lontras'
  },
  ...usuario
};
console.log(usuario3);
