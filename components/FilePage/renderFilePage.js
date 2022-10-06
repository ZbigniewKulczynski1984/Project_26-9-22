import {storage, auth} from "../../firebaseConfig.js";
import {
  uploadBytes,
  ref,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

export default function() {
    const contentContainer = document.querySelector(".content");
    contentContainer.innerHTML = "";

    const h2 = document.createElement('h2');
    h2.textContent = "Store your files via our app!";
    contentContainer.appendChild(h2);

    const fileForm = document.createElement("form");
    fileForm.setAttribute("id", "file-form");

    const fileInput = document.createElement("input");
    fileInput.setAttribute("id", "file-input");
    fileInput.setAttribute("type", "file");
    fileInput.setAttribute("accept", "image/png, image/jpeg");

    const submitButton = document.createElement("button");
    submitButton.setAttribute("id", "file-form-submit-button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Upload";

    fileForm.appendChild(fileInput);
    fileForm.appendChild(submitButton);

    contentContainer.appendChild(fileForm);

    fileForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const file = fileInput.files[0];
    
        const storageRef = ref(storage, `/users/${auth.currentUser.uid}/avatar`);
        uploadBytes(storageRef, file)
          .then(() => console.log("Uploaded the file successfully"))
          .catch(() => console.log("Failed to upload the file"));
      });
}