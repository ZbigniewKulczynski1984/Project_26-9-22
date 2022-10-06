import renderTodoForm from "../todoForm/renderTodoForm.js";
import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { firestore } from "../../firebaseConfig.js";

export default function () {
  
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";
  
  const h2 = document.createElement("h2");
  h2.textContent = "Your team's todos";
  contentContainer.appendChild(h2);
  
  const todoForm = renderTodoForm();
  
  contentContainer.appendChild(todoForm);
  
  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const todoText = document.getElementById("todo-input").value;

    
    const category = [...document.getElementsByName("category")].find(
      (input) => input.checked
    ).value;

    // DODAWANIE DANYCH DO FIRESTORE
    const addDocData = async function (todoText, category) {
      try {
        
        const docInfo = await addDoc(collection(firestore, "teams"), {
          todoText,
          category,
        });
        console.log(docInfo);
      } catch (err) {
        console.error(err.message);
      }
    };
    addDocData(todoText, category);
  });

 
  const ul = document.createElement("ul");
  ul.setAttribute("id", "teams-todo-list");
  
  const readDocData = async function () {
    
    const querySnapshot = await getDocs(collection(firestore, "teams"));
    

    querySnapshot.forEach((el) => {
      
      const docData = el.data();
      
      const li = document.createElement("li");
      li.textContent = `${docData.todoText} (${docData.category})`;
      
      ul.appendChild(li);
      
    });
  };

  
  readDocData();
  
  contentContainer.appendChild(ul);
}
