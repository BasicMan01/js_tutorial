import Singleton from './singleton.js';

document.addEventListener('DOMContentLoaded', () => {
	const a = Singleton.getInstance();

	a.setText('this is the only one');

	const b = Singleton.getInstance();
	const c = Singleton.getInstance();

	console.log(a);
	console.log(b);
	console.log(c);
});