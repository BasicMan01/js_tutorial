import { ObjectContainer } from './iterator.js';

document.addEventListener('DOMContentLoaded', () => {
	const objects = new ObjectContainer();

	document.getElementById('addObject').addEventListener('click', () => {
		const container = document.getElementById('objectContainer');
		const div = document.createElement('div');

		div.style.border = '1px solid black';
		div.style.margin = '10px';
		div.style.height = '50px';
		div.style.width = '50px';
		div.style.float = 'left';

		container.append(div);
		objects.add(div);
	});

	document.getElementById('traverse').addEventListener('click', () => {
		objects.traverse((element) => {
			element.style.background = 'red';
		});
	});
});