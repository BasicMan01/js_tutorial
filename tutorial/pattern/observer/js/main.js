import {Alarm, Lamp, Motor} from './observer.js';

document.addEventListener('DOMContentLoaded', () => {
	let motor = new Motor();

	motor.addObserver(new Lamp());
	motor.addObserver(new Alarm());

	document.getElementById('btnMakeDamage').addEventListener('click', (event) => {
		motor.damage();
	});

	document.getElementById('btnRepair').addEventListener('click', (event) => {
		motor.repair();
	});
});