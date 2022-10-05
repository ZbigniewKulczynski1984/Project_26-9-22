import renderTodoForm from "../todoForm/renderTodoForm";

import {
    collection,
    addDoc,
    getDocs
} from "https://gstatic.com/firebasejs/9.8.2/firebase-firestore.js"

import {firestore} from "../../firestoreConfig.js";

export default function () {

    const contentContainer = document.querySelector(".content");
    contentContainer.innerHTML = "";

    const h2 = document.createElement("h2");
    h2.textContent = "Your team's todos.";
    contentContainer.appendChild(h2);

    const todoForm = renderTodoForm();

    todoForm.setAttribute("id", "teams-todo-form");
    contentContainer.appendChild(todoForm);

    todoForm.addEventListener("submit", function (event) {
        event.preventDefault();

    const todoText = document.getElementById("todo-input").value;

    })
};