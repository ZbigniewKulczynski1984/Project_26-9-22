export default function () {
	const form = document.createElement('form');
	form.setAttribute = ('id', 'login-form');

	const inputEmailLogin = document.createElement('input');
	inputEmailLogin.setAttribute = ('type', 'email');
	inputEmailLogin.setAttribute = ('id', 'input-email-login');
	inputEmailLogin.setAttribute = ('placeholder', 'email');

	const inputEmailLogin2 = document.createElement('input');
	inputEmailLogin2.setAttribute = ('type', 'password');
	inputEmailLogin2.setAttribute = ('id', 'input-password-login');
	inputEmailLogin2.setAttribute = ('placeholder', 'password');

	const btn = document.createElement('button');
	btn.setAttribute = ('type', 'submit');
	btn.textContent = 'Sign in';

	form.appendChild(inputEmailLogin);
	form.appendChild(inputEmailLogin2);
	form.appendChild(btn);

	return form;
}
