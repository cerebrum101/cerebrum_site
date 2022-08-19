let skills = document.getElementsByClassName('skill');
console.log(skills);

for (const elem of skills) {
	console.log(elem);
	let percentage = elem.querySelector('.skill__percent').innerText;
	let bar = elem.lastElementChild;




	bar.style.width = percentage;
	
}
