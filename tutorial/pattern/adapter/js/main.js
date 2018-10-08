import {AdapterCar, AdapterRocket} from './adapter.js';

document.addEventListener('DOMContentLoaded', () => {
	let adapter = null;

	adapter = new AdapterRocket();
	adapter.start();
	adapter.stop();

	adapter = new AdapterCar();
	adapter.start();
	adapter.stop();
});