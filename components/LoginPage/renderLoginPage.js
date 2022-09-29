import renderLoginForm from '../LoginForm/renderLoginForm.js';
import renderRegisterForm from '../RegisterForm/renderRegisterForm.js';
import renderHomePage from '../HomePage/renderHomePage.js';
import { auth } from '../../firebaseConfig.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';

export default function () {
	const contentContainer = document.querySelector('.content');
	contentContainer.innerHTML = '';

	const h2 = document.createElement('h2');
	h2.textContent = 'Log in or sign up';

	const p = document.createElement('p');
	p.textContent =
		'Our authentication mechanism uses Firebase Auth and is 100% secure.';

	const label = document.createElement('label');
	label.textContent = 'Log in';

	const btn = document.createElement('button');
	btn.setAttribute('id', 'register-button');
	btn.textContent = 'Register';

	contentContainer.appendChild(h2);
	contentContainer.appendChild(p);
	contentContainer.appendChild(label);
	contentContainer.appendChild(loginForm);
	contentContainer.appendChild(btn);

	btn.addEventListener('click', () => {
		contentContainer.innerHTML = '';
		renderRegisterForm();
	});

	loginForm.addEventListener('submit', (event) => {
		event.preventDefault();
		const email = document.getElementById('input-email-login').value;
		const password = document.getElementById('input-password-login').value;

		signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials);
        
	});
}

renderLoginForm();

const loginForm = renderLoginForm();
