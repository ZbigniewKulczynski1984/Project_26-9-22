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

	const todoRef = ref(database, 'todos/' + auth.currentUser.uid);
	onValue(todoRef, (snapshot) => {
		const data = snapshot.val();

		if (!data) {
			contentContainer.innerHTML = '';

			const h2 = document.createElement('h2');
			h2.textContent = 'Add, remove and edit your todos.';
			contentContainer.appendChild(h2);

			const todoForm = renderTodoForm();

			contentContainer.appendChild(todoForm);

			todoForm.addEventListener('submit', (event) => {
				event.preventDefault();

				const todoText = document.getElementById('todoInput').value;

				const todoCategory = document.getElementsByName('category').value;

				const categoryList = [...category];
                const found = categoryList.find((input) => input.checked);

                const foundValue = found.value;
                push(todoRef, { todoText, foundValue})
                    .then(() => console.log('pushed the data'))
                    .catch((err) => console.log('Failed to push'));
			});
		}
        const todos = Object.values(data)

        const h2 = document.createElement('h2');
        h2.textContent = "Add, remove and edit your todos.";

        const li = document.createElement("li");
        li.setAttribute("id", `li-${i}`);

        const div = document.createElement("div");
        div.setAttribute("id", `div-${i}`);

        const span = document.createElement("span");
        span.textContent = `${el.todoText} (${el.category})`;

        const editButton = document.createElement("button");
        editButton.setAttribute("id", `edit-button-${i}`);
        editButton.setAttribute("class", "edit-button");
        editButton.textContent = "Edit";

        const removeButton = document.createElement("button");
        removeButton.setAttribute("id", `remove-button-${i}`);
        removeButton.setAttribute("class", "remove-button");
        removeButton.textContent = "Remove";

        div.appendChild(span);
        div.appendChild(editButton);
        div.appendChild(removeButton);

        li.appendChild(div);
        return li;

        console.log(listItems)
      });
        


	});
}


//const todos = object.values