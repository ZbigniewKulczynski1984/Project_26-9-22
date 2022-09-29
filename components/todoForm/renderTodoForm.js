export default function () {
	const form = document.querySelector('form');
	form.setAttribute('id', 'todo-form');

	const input = document.querySelector('input');
	input.setAttribute('type', 'text');
	input.setAttribute('id', 'todo-input');

	const fieldset = document.querySelector('fieldset');
	fieldset.setAttribute('id', 'todo-fieldset');

	const legend = document.querySelector('legend');
	legend.setAttribute('id', 'todo-legend');
	legend.textContent = 'Select a category';

	const divWork = document.querySelector('div');
	divWork.setAttribute('id', 'div-work');

	const inputWork = document.querySelector('input');
	inputWork.setAttribute('type', 'radio');
	inputWork.setAttribute('id', 'radio-work');
	inputWork.setAttribute('name', 'work');
	inputWork.setAttribute('value', 'work');

	const labelWork = document.querySelector('label');
	labelWork.setAttribute('for', 'radio-work');
	labelWork.textContent = 'Work';

	const divLife = document.querySelector('div');
	divLife.setAttribute('id', 'div-life');

	const inputLife = document.querySelector('input');
	inputLife.setAttribute('type', 'radio');
	inputLife.setAttribute('id', 'radio-life');
	inputLife.setAttribute('name', 'life');
	inputLife.setAttribute('value', 'life');

	const labelLife = document.querySelector('label');
	labelLife.setAttribute('for', 'radio-life');
	labelLife.textContent = 'Life';

	const divSport = document.querySelector('div');
	divSport.setAttribute('id', 'div-sport');

	const inputSport = document.querySelector('input');
	inputSport.setAttribute('type', 'radio');
	inputSport.setAttribute('id', 'radio-sport');
	inputSport.setAttribute('name', 'sport');
	inputSport.setAttribute('value', 'sport');

	const labelSport = document.querySelector('label');
	labelSport.setAttribute('for', 'radio-sport');
	labelSport.textContent = 'Sport';

	const divEducation = document.querySelector('div');
	divEducation.setAttribute('id', 'div-education');

	const inputEducation = document.querySelector('input');
	inputEducation.setAttribute('type', 'radio');
	inputEducation.setAttribute('id', 'radio-education');
	inputEducation.setAttribute('name', 'education');
	inputEducation.setAttribute('value', 'education');

	const labelEducation = document.querySelector('label');
	labelEducation.setAttribute('for', 'radio-education');
	labelEducation.textContent = 'Education';

	fieldset.appendChild(legend);
	fieldset.appendChild(divWork);
	fieldset.appendChild(divLife);
	fieldset.appendChild(divSport);
	fieldset.appendChild(divEducation);

	const submitBtn = document.querySelector('button');
	submitBtn.setAttribute('type', 'submit');
	submitBtn.setAttribute('id', 'todo-form-submit-button');
	submitBtn.textContent = 'Add todo';

	form.appendChild(input);
	form.appendChild(fieldset);
	form.appendChild(submitBtn);
}

renderTodoForm();
