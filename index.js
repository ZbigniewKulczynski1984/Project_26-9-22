// named import
// import {app} from './firebaseConfig.js';
// console.log(app);

import renderHomePage from './components/HomePage/renderHomePage.js';
// import renderRegisterForm from './components/RegisterForm/renderRegisterForm.js';
// import renderLoginForm from './components/LoginForm/renderLoginForm.js';
import renderLoginPage from './components/LoginPage/renderLoginPage.js';
import {
	onAuthStateChanged,
	signOut,
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';
import { auth } from './firebaseConfig.js';

// import renderTodoForm from "./components/todoForm/renderTodoForm.js";

//selecting content container
const contentContainer = document.querySelector('content');

const homeButton = document.getElementById('home-anchor');
const todosButton = document.getElementById('todos-anchor');
const aboutButton = document.getElementById('about-anchor');
const publicButton = document.getElementById('public-anchor');
const loginButton = document.getElementById('login-anchor');

//reagowanie na zalogowanie i wylogowanie
onAuthStateChanged(auth, (user) => {
	if (user) {
		console.log(`User is logged in (${user.email}), onAuthStateChanged`);
		loginButton.textContent = 'Log out';
	} else {
		console.log(`No user is logged in, onAuthStateChanged`);
		loginButton.textContent = 'Log in';
		renderHomePage();
	}
});

//rendering the home page  on initial page load
renderHomePage();
// contentContainer.appendChild(renderTodoForm());




//rendering the home page on home button click
homeButton.addEventListener('click', renderHomePage);
loginButton.addEventListener('click', () => {
	const user = auth.currentUser;
    if(user) {
        signOut(auth);
    } else {
        renderLoginPage();
		
    }
});


