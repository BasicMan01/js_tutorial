import {Circle, Rectangle, RedColor, GreenColor} from './bridge.js';

document.addEventListener('DOMContentLoaded', () => {
	let canvas = document.getElementById('canvas');

	document.getElementById('redCircle').addEventListener('click', () => {
		new Circle(canvas, new RedColor()).draw();
	});

	document.getElementById('greenCircle').addEventListener('click', () => {
		new Circle(canvas, new GreenColor()).draw();
	});

	document.getElementById('redRectangle').addEventListener('click', () => {
		new Rectangle(canvas, new RedColor()).draw();
	});

	document.getElementById('greenRectangle').addEventListener('click', () => {
		new Rectangle(canvas, new GreenColor()).draw();
	});
});