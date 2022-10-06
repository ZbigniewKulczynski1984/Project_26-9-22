export default function () {
  
  const form = document.createElement("form");
  form.setAttribute("id", "todo-form");

  
  const input = document.createElement("input");
  input.setAttribute("id", "todo-input");

  
  const fieldset = document.createElement("fieldset");
  fieldset.setAttribute("id", "todo-fieldset");

  
  const legend = document.createElement("legend");
  legend.setAttribute("id", "todo-legend");
  legend.textContent = "Select a category";
  fieldset.appendChild(legend);
  
  const categories = ["work", "life", "sport", "education"];
  categories.forEach((category) => {
    const div = document.createElement("div");
    div.setAttribute("id", `div-${category}`);
    const radioInput = document.createElement("input");
    radioInput.setAttribute("type", "radio");
    radioInput.setAttribute("id", `radio-${category}`);
    radioInput.setAttribute("name", "category");
    radioInput.setAttribute("value", category);
    const label = document.createElement("label");
    label.setAttribute("for", `radio-${category}`);
    label.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    div.appendChild(radioInput);
    div.appendChild(label);
    fieldset.appendChild(div);
  });

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "todo-form-submit-button");
  submitButton.textContent = "Add todo";

  
  form.appendChild(input);
  form.appendChild(fieldset);
  form.appendChild(submitButton);


  return form;
}