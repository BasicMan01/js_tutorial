import Singleton from './singleton.js';

document.addEventListener('DOMContentLoaded', () => {
	let a = Singleton.getInstance();

	a.setText('this is the only one');

	let b = Singleton.getInstance();
	let c = Singleton.getInstance();

	console.log(a);
	console.log(b);
	console.log(c);
});