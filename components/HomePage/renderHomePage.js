export default function () {
	const section = document.querySelector('.content');
	section.innerHTML = '';

	const h2 = document.createElement('h2');
	h2.textContent = 'Welcome!';

	const p = document.createElement('p');
	p.textContent =
		'This is a simple web page written in vanilla JavaScript used as a practice project in frontend courses at Software Development Academy. Block subject: Firebase.';

	section.appendChild(h2);
	section.appendChild(p);
}
