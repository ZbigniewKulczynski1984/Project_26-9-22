export default function () {

	const form = document.createElement('form');
	form.setAttribute('id', 'todo-form');

	const todoInput = document.createElement('input');
	todoInput.setAttribute('id', 'todo-input');

	const fieldset = document.createElement('fieldset');
	fieldset.setAttribute('id', 'todo-fieldset');

	const legend = document.createElement('legend');
	legend.textContent = 'Select a category';

	const divWork = document.createElement('div');
	divWork.setAttribute('id', 'div-work');

	const radioWork = document.createElement('input');
	radioWork.setAttribute('type', 'radio');
	radioWork.setAttribute('id', 'radio-work');
	radioWork.setAttribute('name', 'category');
	radioWork.setAttribute('value', 'work');
	radioWork.setAttribute('checked', 'true');

	const workLabel = document.createElement('label');
	workLabel.setAttribute('for', 'radio-work');
	workLabel.textContent = 'Work';
	divWork.appendChild(radioWork);
	divWork.appendChild(workLabel);

	const divLife = document.createElement('div');
	divLife.setAttribute('id', 'div-life');

	const radioLife = document.createElement('input');
	radioLife.setAttribute('type', 'radio');
	radioLife.setAttribute('id', 'radio-life');
	radioLife.setAttribute('name', 'category');
	radioLife.setAttribute('value', 'life');

	const lifeLabel = document.createElement('label');
	lifeLabel.setAttribute('for', 'radio-life');
	lifeLabel.textContent = 'life';
	divLife.appendChild(radioLife);
	divLife.appendChild(lifeLabel);

	const divSport = document.createElement('div');
	divSport.setAttribute('id', 'div-Sport');

	const radioSport = document.createElement('input');
	radioSport.setAttribute('type', 'radio');
	radioSport.setAttribute('id', 'radio-sport');
	radioSport.setAttribute('name', 'category');
	radioSport.setAttribute('value', 'sport');

	const sportLabel = document.createElement('label');
	sportLabel.setAttribute('for', 'radio-sport');
	sportLabel.textContent = 'Sport';
	divSport.appendChild(radioSport);
	divSport.appendChild(sportLabel);

	const divEducation = document.createElement('div');
	divEducation.setAttribute('id', 'div-Education');

	const radioEducation = document.createElement('input');
	radioEducation.setAttribute('type', 'radio');
	radioEducation.setAttribute('id', 'radio-education');
	radioEducation.setAttribute('name', 'category');
	radioEducation.setAttribute('value', 'education');
=======

const form = document.createElement("form");
  form.setAttribute("id", "todo-form");

  
  const todoInput = document.createElement("input");
  todoInput.setAttribute("id", "todo-input");

  
  const fieldset = document.createElement("fieldset");
  fieldset.setAttribute("id", "todo-fieldset");

  
  const legend = document.createElement("legend");
  legend.textContent = "Select a category";

  
  const divWork = document.createElement("div");
  divWork.setAttribute("id", "div-work");

  const radioWork = document.createElement("input");
  radioWork.setAttribute("type", "radio");
  radioWork.setAttribute("id", "radio-work");
  radioWork.setAttribute("name", "category");
  radioWork.setAttribute("value", "work");
  radioWork.setAttribute("checked", "true");

  const workLabel = document.createElement("label");
  workLabel.setAttribute("for", "radio-work");
  workLabel.textContent = "Work";
  divWork.appendChild(radioWork);
  divWork.appendChild(workLabel);

  const divLife = document.createElement("div");
  divLife.setAttribute("id", "div-life");

  const radioLife = document.createElement("input");
  radioLife.setAttribute("type", "radio");
  radioLife.setAttribute("id", "radio-life");
  radioLife.setAttribute("name", "category");
  radioLife.setAttribute("value", "life");

  const lifeLabel = document.createElement("label");
  lifeLabel.setAttribute("for", "radio-life");
  lifeLabel.textContent = "life";
  divLife.appendChild(radioLife);
  divLife.appendChild(lifeLabel);

  const divSport = document.createElement("div");
  divSport.setAttribute("id", "div-Sport");

  const radioSport = document.createElement("input");
  radioSport.setAttribute("type", "radio");
  radioSport.setAttribute("id", "radio-sport");
  radioSport.setAttribute("name", "category");
  radioSport.setAttribute("value", "sport");

  const sportLabel = document.createElement("label");
  sportLabel.setAttribute("for", "radio-sport");
  sportLabel.textContent = "Sport";
  divSport.appendChild(radioSport);
  divSport.appendChild(sportLabel);

  const divEducation = document.createElement("div");
  divEducation.setAttribute("id", "div-Education");

  const radioEducation = document.createElement("input");
  radioEducation.setAttribute("type", "radio");
  radioEducation.setAttribute("id", "radio-education");
  radioEducation.setAttribute("name", "category");
  radioEducation.setAttribute("value", "education");
  
  const educationLabel = document.createElement("label");
  educationLabel.setAttribute("for", "radio-education");
  educationLabel.textContent = "Education";
  divEducation.appendChild(radioEducation);
  divEducation.appendChild(educationLabel);

  
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("class", "todo-form-submit-button");
  submitButton.textContent = "Add todo";

  
  fieldset.appendChild(legend);
  fieldset.appendChild(divWork);
  fieldset.appendChild(divLife);
  fieldset.appendChild(divSport);
  fieldset.appendChild(divEducation);


	


