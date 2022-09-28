// named import
// import {app} from './firebaseConfig.js';
// console.log(app);

import renderHomePage from './components/HomePage/renderHomePage.js';
import renderRegisterForm from './components/RegisterForm/renderRegisterForm.js';
import renderLoginForm from './components/LoginForm/renderLoginForm.js';
import renderLoginPage from './components/LoginPage/renderLoginPage.js';

//selecting content container
const contentContainer = document.querySelector('content');

const homeButton = document.getElementById('home-anchor');
const todosButton = document.getElementById('todos-anchor');
const aboutButton = document.getElementById('about-anchor');
const publicButton = document.getElementById('public-anchor');
const loginButton = document.getElementById('login-anchor');

//rendering the home page  on initial page load
renderHomePage();

//rendering the home page on home button click
homeButton.addEventListener('click', renderHomePage);
loginButton.addEventListener('click', renderLoginPage);
