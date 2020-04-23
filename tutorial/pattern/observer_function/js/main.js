import Observable from './observer.js';

document.addEventListener('DOMContentLoaded', () => {
	let bodyBgColor = new Observable();

	bodyBgColor.addObserver(function(value) {
		document.getElementById('backgroundColor1').value = value;
	});

	bodyBgColor.addObserver(function(value) {
		document.getElementById('backgroundColor2').value = value;
	});

	bodyBgColor.addObserver(function(value) {
		document.getElementById('backgroundColor3').value = value;
	});



	document.getElementById('backgroundColor1').addEventListener('blur', function(event) {
		document.body.style.backgroundColor = this.value;
		bodyBgColor.notifyObservers(this.value);
	});

	document.getElementById('backgroundColor2').addEventListener('blur', function(event) {
		document.body.style.backgroundColor = this.value;
		bodyBgColor.notifyObservers(this.value);
	});

	document.getElementById('backgroundColor3').addEventListener('blur', function(event) {
		document.body.style.backgroundColor = this.value;
		bodyBgColor.notifyObservers(this.value);
	});
});