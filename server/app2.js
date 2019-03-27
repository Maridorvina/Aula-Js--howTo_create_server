const http = require('http');

const server = http.creatServer((req,res) => {
	if(req.url === "/clientes") //condição if para comparar que conteúdo precisa ser string ou /clintes
		return.end('Listagem Clientes') //Só vou chegar nessa condição se o if for válido
})


	res.statusCode = 404;
	return res.end('URL inválida');
	
	const clientes = [
	{ID : 1, nome: "teste", senha:"102030"},
	{ID : 2, nome: "teste", senha:"102031"},
	{ID : 3, nome: "teste3", senha:"102032"},
	{ID : 4, nome: "teste4", senha:"102033"},
	{ID : 5, nome: "teste5", senha:"102034"}

	];
	
	const server = http.createServer((req, res) => {
		if(req.url.toLowerCase() === "/clientes"){
			const simpleClientes = clintes.map(x =>
			(
				return {nome : x.nome, ID : x.ID};
			)};
		
		return res.end(JSON.stringify(simpleClientes));
	}
	
	if(req.url.toLowerCase() === "/carros"){
		
	}