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



Retorna maiorIdade
const alunos = [
	{ nome : "teste", idade : 15},
	{ nome : "teste2", idade : 21},
	{ nome : "teste3", idade : 12},
	{ nome : "teste4", idade : 23}
];


const alunos2 = alunos.map(v => {
		return {...v, maiorIdade : v.idade > 18};
});

const alunos3 = alunos2.filter(v => v.maiorIdade);

const result = alunos.reduce((acc, v) => acc + v.idade, 0) / alunos.length;

console.log(result);*/

//Retorna mediaIdade
const alunos = [
    { nome : "teste", idade : 15},               
    { nome : "teste2", idade : 21},
    { nome : "teste3", idade : 12},
    { nome : "teste4", idade : 23}
];

const alunos2 = alunos.map(v => {
    return {...v, maiorIdade : v.idade > 18};
});

const alunos3 = alunos2.filter(v => v.maiorIdade);

const result1 = alunos.reduce((acc, v) => acc + v.idade,0)

const result = alunos.reduce((acc, v) => {
	acc['aluno' + (i+1)] = v;
	return acc;
	
},{});

console.log(result);

/*const result = alunos.map(v => {
		let item = v;
		item["maiorIdade"] = v.idade > 18;
		return item;
});
	
console.log(result);	


------------------------------------------------------

for(let key in alunos) console.log(key);
for(let value in alunos) console.log(value);
*/