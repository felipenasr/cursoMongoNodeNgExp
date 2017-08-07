const _ = require('lodash');

const alunos = [{
	nome: 'Joao',
	nota: 7.5
},
{
	nome: 'Felipe',
	nota: 10
},
{
	nome: 'André',
	nota: 5.5
},
{
	nome: 'Luana',
	nota: 10
}]

const media = _.sumBy(alunos, 'nota') / alunos.length;

console.log(media);