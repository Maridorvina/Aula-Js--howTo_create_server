const http = require('http');

/*const server = http.creatServer((req,res) => {
	if(req.url === "/clientes") //condição if para comparar que conteúdo precisa ser string ou /clintes
		return.end('Listagem Clientes') //Só vou chegar nessa condição se o if for válido */
})
	
	const clientes = [
	{ID : 1, nome: "teste", senha:"102030"},
	{ID : 2, nome: "teste2", senha:"102031"},
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
	
	const server = http.createServer((req, res) => {
		if(req.url.toLowerCase() === "/clientes"){
			const simpleClientes = clintes.map(x =>
			(
				return {nome : x.nome, ID : x.ID};
			)};
	
	// /clientes/1 --- Busca o /clientes/1
	if(regexClientes.exec(req.url).indexOf(req.url) > -1){
		const index = req.url.lastIndexof('/') + 1;
		const id = req.url.substring(index);
		const filteredClientes = clientes.filter(x => x.ID === parseInt(id));		
		if(filteredClientes.length > 0){
			return res.end(JSON.stringify(simpleClientes));
		}
		
		return res.end(clientes);
		
		}
	
	
	if(req.url.toLowerCase() === "/carros"){
		return res.end('Listagem de carros');
		
	}
		
	res.statusCode = 404;
	return res.end('URL inválida');
	

	
	
