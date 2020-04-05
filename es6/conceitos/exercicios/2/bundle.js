const usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var map = usuarios.map(elem => elem.idade);
console.log(map);
var filter = usuarios.filter(elem => elem.empresa === 'Rocketseat' && elem.idade > 18);
console.log(filter);
var find = usuarios.find(elem => elem.empresa === 'Google');
console.log(find);
const calculo = usuarios.map(users => ({ ...users,
  idade: users.idade * 2
})).filter(users => users.idade <= 50);
console.log(calculo);
