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
  
	const educationLabel = document.createElement('label');
	educationLabel.setAttribute('for', 'radio-education');
	educationLabel.textContent = 'Education';
	divEducation.appendChild(radioEducation);
	divEducation.appendChild(educationLabel);

	const submitButton = document.createElement('button');
	submitButton.setAttribute('type', 'submit');
	submitButton.setAttribute('class', 'todo-form-submit-button');
	submitButton.textContent = 'Add todo';

	fieldset.appendChild(legend);
	fieldset.appendChild(divWork);
	fieldset.appendChild(divLife);
	fieldset.appendChild(divSport);
	fieldset.appendChild(divEducation);

	form.appendChild(todoInput);
	form.appendChild(fieldset);
	form.appendChild(submitButton);

	return form;
}

// export default function () {
// 	const form = document.createElement('form');
// 	form.setAttribute('id', 'todo-form');

// 	const input = document.createElement('input');
// 	input.setAttribute('type', 'text');
// 	input.setAttribute('id', 'todo-input');

// 	const fieldset = document.createElement('fieldset');
// 	fieldset.setAttribute('id', 'todo-fieldset');

// 	const legend = document.createElement('legend');
// 	legend.setAttribute('id', 'todo-legend');
// 	legend.textContent = 'Select a category';

// 	const divWork = document.createElement('div');
// 	divWork.setAttribute('id', 'div-work');

// 	const inputWork = document.createElement('input');
// 	inputWork.setAttribute('type', 'radio');
// 	inputWork.setAttribute('id', 'radio-work');
// 	inputWork.setAttribute('name', 'work');
// 	inputWork.setAttribute('value', 'work');

// 	console.log(inputWork);

// 	const labelWork = document.createElement('label');
// 	labelWork.setAttribute('for', 'radio-work');
// 	labelWork.textContent = 'Work';

// 	const divLife = document.createElement('div');
// 	divLife.setAttribute('id', 'div-life');

// 	const inputLife = document.createElement('input');
// 	inputLife.setAttribute('type', 'radio');
// 	inputLife.setAttribute('id', 'radio-life');
// 	inputLife.setAttribute('name', 'life');
// 	inputLife.setAttribute('value', 'life');

// 	const labelLife = document.createElement('label');
// 	labelLife.setAttribute('for', 'radio-life');
// 	labelLife.textContent = 'Life';

// 	const divSport = document.createElement('div');
// 	divSport.setAttribute('id', 'div-sport');

// 	const inputSport = document.createElement('input');
// 	inputSport.setAttribute('type', 'radio');
// 	inputSport.setAttribute('id', 'radio-sport');
// 	inputSport.setAttribute('name', 'sport');
// 	inputSport.setAttribute('value', 'sport');

// 	const labelSport = document.createElement('label');
// 	labelSport.setAttribute('for', 'radio-sport');
// 	labelSport.textContent = 'Sport';

// 	const divEducation = document.createElement('div');
// 	divEducation.setAttribute('id', 'div-education');

// 	const inputEducation = document.createElement('input');
// 	inputEducation.setAttribute('type', 'radio');
// 	inputEducation.setAttribute('id', 'radio-education');
// 	inputEducation.setAttribute('name', 'education');
// 	inputEducation.setAttribute('value', 'education');

// 	const labelEducation = document.createElement('label');
// 	labelEducation.setAttribute('for', 'radio-education');
// 	labelEducation.textContent = 'Education';

// 	fieldset.appendChild(legend);
// 	fieldset.appendChild(divWork);
// 	fieldset.appendChild(divLife);
// 	fieldset.appendChild(divSport);
// 	fieldset.appendChild(divEducation);

// 	const submitButton = document.createElement('button');
// 	submitButton.setAttribute('type', 'submit');
// 	submitButton.setAttribute('id', 'todo-form-submit-button');
// 	submitButton.textContent = 'Add todo';

// 	form.appendChild(input);
// 	form.appendChild(fieldset);
// 	form.appendChild(submitButton);

// 	return form;
// }

//alternatywna opcja
// const categories = ["work", "life", "sport", "education"];
//   categories.forEach((category) => {
//     const div = document.createElement("div");
//     div.setAttribute("id", `div-${category}`);
//     const radioInput = document.createElement("input");
//     radioInput.setAttribute("type", "radio");
//     radioInput.setAttribute("id", `radio-${category}`);
//     radioInput.setAttribute("name", "category");
//     radioInput.setAttribute("value", category);
//     const label = document.createElement("label");
//     label.setAttribute("for", `radio-${category}`);
//     label.textContent = category.charAt(0).toUpperCase();
//     div.appendChild(radioInput);
//     div.appendChild(label);
//     fieldset.appendChild(div);
//   });
