import {auth} from "../../firebaseConfig.js"
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js" 

export default function () {
	const section = document.querySelector('.content');
	section.innerHTML = '';

	const form = document.createElement('form');
	form.setAttribute = ('id', 'register-form');

	const h2 = document.createElement('h2');
	h2.textContent = 'Register';

	const inputEmail = document.createElement('input');
	inputEmail.setAttribute ('type', 'email');
	inputEmail.setAttribute ('placeholder', 'email');
	inputEmail.setAttribute ('id', 'input-email-register');

	const inputPass1 = document.createElement('input');
	inputPass1.setAttribute ('type', 'password');
	inputPass1.setAttribute ('placeholder', 'password');
	inputPass1.setAttribute ('id', 'first-input-password-register');

	const inputPass2 = document.createElement('input');
	inputPass2.setAttribute ('type', 'password');
	inputPass2.setAttribute ('placeholder', 'password');
	inputPass2.setAttribute ('id', 'second-input-password-register');

	const button = document.createElement('button');
	button.setAttribute = ('type', 'submit');
	button.textContent = 'Register';

	form.appendChild(h2);
	form.appendChild(inputEmail);
	form.appendChild(inputPass1);
	form.appendChild(inputPass2);
	form.appendChild(button);

	section.appendChild(form);

    form.addEventListener('submit', function(event){
        event.preventDefault() //zapobiega refreshowi strony

        const email = inputEmail.value
        const password = inputPass1.value
        const password2 = inputPass2.value

        console.log(email, password, password2);

        if(
            password === password2 &&
            password.length >= 6 &&
            password2.length >= 6
            ) 
            {
        
    //właściwa rejstracja urzytkownika
    createUserWithEmailAndPassword(auth, email, password)
            .then(userCredencials => console.log(userCredencials))
            .catch((err) => console.log(err))
        } else {
            console.log('Hasła muszą być takie same!!! lub są za krótkie');
        }
});

}