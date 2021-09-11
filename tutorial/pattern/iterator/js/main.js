import {ObjectContainer} from './iterator.js';

document.addEventListener('DOMContentLoaded', () => {
	let objects = new ObjectContainer();

	document.getElementById('addObject').addEventListener('click', function() {
		let container = document.getElementById('objectContainer');
		let div = document.createElement('div');

		div.style.border = '1px solid black';
		div.style.margin = '10px';
		div.style.height = '50px';
		div.style.width = '50px';
		div.style.float = 'left';

		container.append(div)
		objects.add(div);
	});

	document.getElementById('traverse').addEventListener('click', function() {
		objects.traverse(function(element) {
			element.style.background = 'red';
		});
	});
});