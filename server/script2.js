async function getData(file){
	const response = await fetch(file);
	const data = await response.json();
	return data;
}

asyn function init() {
	const data = await getData('./data.json');
	console.log(data);
}

init();




//fetch('data.json') função ascincrono
	//.then(
		//(response)=>{
			
			//response.json().then(
			
				//(data) => {
					
					//console.log(data);
				//}
			//)
		//})
//		
		