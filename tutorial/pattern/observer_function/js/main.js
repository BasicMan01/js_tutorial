import Observable from './observer.js';

document.addEventListener('DOMContentLoaded', () => {
	const bodyBgColor = new Observable();

	bodyBgColor.addObserver((value) => {
		document.getElementById('backgroundColor1').value = value;
	});

	bodyBgColor.addObserver((value) => {
		document.getElementById('backgroundColor2').value = value;
	});

	bodyBgColor.addObserver((value) => {
		document.getElementById('backgroundColor3').value = value;
	});



	document.getElementById('backgroundColor1').addEventListener('blur', (event) => {
		document.body.style.backgroundColor = event.currentTarget.value;
		bodyBgColor.notifyObservers(event.currentTarget.value);
	});

	document.getElementById('backgroundColor2').addEventListener('blur', (event) => {
		document.body.style.backgroundColor = event.currentTarget.value;
		bodyBgColor.notifyObservers(event.currentTarget.value);
	});

	document.getElementById('backgroundColor3').addEventListener('blur', (event) => {
		document.body.style.backgroundColor = event.currentTarget.value;
		bodyBgColor.notifyObservers(event.currentTarget.value);
	});
});