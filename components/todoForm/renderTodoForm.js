export default function () {

	const form = document.createElement('form');
	form.setAttribute('id', 'todo-form');

	const input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.setAttribute('id', 'todo-input');

	const fieldset = document.createElement('fieldset');
	fieldset.setAttribute('id', 'todo-fieldset');

	const legend = document.createElement('legend');
	legend.setAttribute('id', 'todo-legend');
	legend.textContent = 'Select a category';

	const divWork = document.createElement('div');
	divWork.setAttribute('id', 'div-work');

	const inputWork = document.createElement('input');
	inputWork.setAttribute('type', 'radio');
	inputWork.setAttribute('id', 'radio-work');
	inputWork.setAttribute('name', 'work');
	inputWork.setAttribute('value', 'work');

	const labelWork = document.createElement('label');
	labelWork.setAttribute('for', 'radio-work');
	labelWork.textContent = 'Work';

	const divLife = document.createElement('div');
	divLife.setAttribute('id', 'div-life');

	const inputLife = document.createElement('input');
	inputLife.setAttribute('type', 'radio');
	inputLife.setAttribute('id', 'radio-life');
	inputLife.setAttribute('name', 'life');
	inputLife.setAttribute('value', 'life');

	const labelLife = document.createElement('label');
	labelLife.setAttribute('for', 'radio-life');
	labelLife.textContent = 'Life';

	const divSport = document.createElement('div');
	divSport.setAttribute('id', 'div-sport');

	const inputSport = document.createElement('input');
	inputSport.setAttribute('type', 'radio');
	inputSport.setAttribute('id', 'radio-sport');
	inputSport.setAttribute('name', 'sport');
	inputSport.setAttribute('value', 'sport');

	const labelSport = document.createElement('label');
	labelSport.setAttribute('for', 'radio-sport');
	labelSport.textContent = 'Sport';

	const divEducation = document.createElement('div');
	divEducation.setAttribute('id', 'div-education');

	const inputEducation = document.createElement('input');
	inputEducation.setAttribute('type', 'radio');
	inputEducation.setAttribute('id', 'radio-education');
	inputEducation.setAttribute('name', 'education');
	inputEducation.setAttribute('value', 'education');

	const labelEducation = document.createElement('label');
	labelEducation.setAttribute('for', 'radio-education');
	labelEducation.textContent = 'Education';

	fieldset.appendChild(legend);
	fieldset.appendChild(divWork);
	fieldset.appendChild(divLife);
	fieldset.appendChild(divSport);
	fieldset.appendChild(divEducation);

	const submitBtn = document.createElement('button');
	submitBtn.setAttribute('type', 'submit');
	submitBtn.setAttribute('id', 'todo-form-submit-button');
	submitBtn.textContent = 'Add todo';

	form.appendChild(input);
	form.appendChild(fieldset);
	form.appendChild(submitBtn);

    return form;
}

// renderTodoForm();
