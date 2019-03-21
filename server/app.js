/*console.log('ok');


class Aluno {
	constructor(nome, idade){
		this.nome = nome;
		this.idade = idade;
	}

	print(){
		console.log(this.nome + " " + this.idade);
		
	}
}

const aluno = new Aluno("teste", 30);
*/

const alunos = [
	{ nome : "teste", idade : 20 };
	{ nome : "teste2", idade : 21 };
	{ nome : "teste3", idade : 22 };
	{ nome : "teste4", idade : 23 };
];

for(let key in alunos) console.log(key);
for(let value in alunos) console.log(value);
