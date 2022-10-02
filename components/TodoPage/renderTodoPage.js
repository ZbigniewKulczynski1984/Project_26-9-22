import renderTodoForm from '../todoForm/renderTodoForm.js';
import { auth, database } from '../../firebaseConfig.js';
import {
	ref,
	onValue,
	push,
	update,
	remove,
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js';

export default function () {
	const contentContainer = document.querySelector('.content');
    contentContainer.innerHTML = ''

	const todoRef = ref(database, 'todos/' + auth.currentUser.uid);
	onValue(todoRef, (snapshot) => {
		const data = snapshot.val();

        if(!data) {
            contentContainer.innerHTML = ''

            const h2 = document.createElementate('h2')
            h2.textContent = "Add, remove and edit your todos.";
            contentContainer.appendChild(h2)

            renderTodoForm()

            contentContainer.appendChild(renderTodoForm);

            
            todoForm.addEventListener('click', () => {
                const todoInput = document.getElementById('todoInput')
            })

            
        }
	});
}
