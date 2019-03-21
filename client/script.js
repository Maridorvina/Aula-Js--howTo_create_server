const divs = document.getElementsByTagName('div');
const div = divs[0];
const text = div.innerText;
div.innerHTML = '<p>' + text + '</p>';


//const list = document.getElementById('lista');
//const todo = prompt('Digite algo a fazer');
//const todoHtml = `<li class='todo'>${todo}</li>`;
//list.innerHTML = list.innerHTML + '\n' + todoHtml;

//const dones = document.getElementsByClassName('done');
//for(let done in dones){
//	done.remove(); }

const $ = (selector) => [...document.querySelectorAll(selector)];

const btnRemover = document.getElementById('btnRemover');
btnRemover.addEventListener('click', () => {
	console.log('click');
	const dones = document.getElementsByClassName('done');
	
	for(let done of [...dones]){
	done.remove();
	}
	
});


const btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click', () => {
	console.log('click');
	const list = document.getElementById('lista');
	const todo = prompt('Digite algo a fazer: ');
	const todoHtml = `<li class='todo'>${todo}</li>`;
	list.innerHTML = list.innerHTML + todoHtml;
});