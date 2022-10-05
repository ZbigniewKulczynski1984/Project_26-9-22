import renderTodoForm from "../todoForm/renderTodoForm.js";
import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { firestore } from "../../firebaseConfig.js";

export default function () {
	const contentContainer = document.querySelector('.content');
	contentContainer.innerHTML = '';

	const h2 = document.createElement('h2');
	h2.textContent = "Your team's todos.";
	contentContainer.appendChild(h2);

	const todoForm = renderTodoForm();

	todoForm.setAttribute('id', 'teams-todo-form');
	contentContainer.appendChild(todoForm);

	todoForm.addEventListener('submit', function (event) {
		event.preventDefault();

		const todoText = document.getElementById('todo-input').value;
		//----------------------------------------
		// Dodawanie danych

		const addDocData = async function (todoText, category) {
			try {
                //wywołanie funkcji addDoc
                const docInfo = await addDoc(collection(firestore, 'teams'), {
                    todoText, category
                })
                console.log(docInfo)
			} catch (err) {
				console.error(err.message);
			}
		};
        addDocData(todoText, category);
	});
}
