import { Alarm, Lamp, Motor } from './observer.js';

document.addEventListener('DOMContentLoaded', () => {
	const motor = new Motor();

	motor.addObserver(new Lamp());
	motor.addObserver(new Alarm());

	document.getElementById('btnMakeDamage').addEventListener('click', () => {
		motor.damage();
	});

	document.getElementById('btnRepair').addEventListener('click', () => {
		motor.repair();
	});
});