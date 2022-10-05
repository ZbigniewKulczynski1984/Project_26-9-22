import renderTodoForm from "../todoForm/renderTodoForm.js";
import { app, auth, database } from "../../firebaseConfig.js";
import {
  ref,
  onValue,
  push,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

const renderH2 = () => {
  const h2 = document.createElement("h2");
  h2.textContent = "Add, remove and edit your todos";
  return h2;
};

const appendElements = (rootEl, elsToAppend) => {
  elsToAppend.forEach((el) => rootEl.appendChild(el));
};

export default function () {
  const contentContainer = document.querySelector(".content");

  const todoRef = ref(database, "todos/" + auth.currentUser.uid);
  const todoFormHandler = (event) => {
    event.preventDefault();
    const todoText = document.getElementById("todo-input").value;
    const category = [...document.getElementsByName("category")].find(
      (input) => input.checked
    ).value;
    push(todoRef, {
      todoText,
      category,
    })
      .then(() => console.log("Pushed the data successfully"))
      .catch(() => console.log("Failed to push the data"));
  };
  onValue(todoRef, (snapshot) => {
    const data = snapshot.val();

    if (!data) {
      
      contentContainer.innerHTML = "";

      
      const h2 = renderH2();
      
      contentContainer.appendChild(h2);

      
      const todoForm = renderTodoForm();

      
      contentContainer.appendChild(todoForm);

      
      todoForm.addEventListener("submit", todoFormHandler);
    } else {
      console.log(data);
      
      const todos = Object.values(data);

      
      const h2 = renderH2();

      
      const listItems = todos.map((el, i) => {
       
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

        
        appendElements(div, [span, editButton, removeButton]);

        
        li.appendChild(div);

        
        return li;
      });

      
      console.log(listItems);

      
      const ul = document.createElement("ul");
     
      listItems.forEach((el) => ul.appendChild(el));
      
      contentContainer.innerHTML = "";
      
      appendElements(contentContainer, [h2, renderTodoForm(), ul]);
      
	  //----------------------------------------------
      const todoForm = document.getElementById("todo-form");
      
      todoForm.addEventListener("submit", todoFormHandler);
      
      
	  //------------------------------------------

      const editButtons = [...document.getElementsByClassName("edit-button")];
      editButtons.forEach((el, i) => {
        el.addEventListener("click", function () {
          this.remove();
          const div = document.getElementById(`div-${i}`);
          const todoForm = renderTodoForm();
          todoForm.setAttribute("id", `todo-form-${i}`);
          div.appendChild(todoForm);
          todoForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const todoText = this.childNodes[0].value;
            console.log(todoText);
            const category = [...this.getElementsByTagName("input")]
              .slice(1, 5)
              .find((input) => input.checked).value;
            console.log(category);
            const updates = {};
            updates[`todos/${auth.currentUser.uid}/${Object.keys(data)[i]}`] = {
              category,
              todoText,
            };
            update(ref(database), updates);
          });
        });
      });
    }
  });
}