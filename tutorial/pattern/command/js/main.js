import { History, BackgroundColorCommand, PositionCommand } from './command.js';

document.addEventListener('DOMContentLoaded', () => {
	const history = new History();

	function showHistory() {
		let output = '';

		for (let i = 0; i < history.undos.length; ++i) {
			output += '<div>' + history.undos[i].name + '</div>';
		}

		for (let i = 0; i < history.redos.length; ++i) {
			output += '<div class="redo">' + history.redos[i].name + '</div>';
		}

		document.getElementById('history').innerHTML = output;
	}


	document.getElementById('executePosition').addEventListener('click', () => {
		const id = document.getElementById('objects').value;
		const obj = document.getElementById(id);
		const pos = {
			'x': document.getElementById('positionX').value + 'px',
			'y': document.getElementById('positionY').value + 'px'
		};

		history.execute(new PositionCommand(obj, pos));
		showHistory();
	});

	document.getElementById('executeBackgroundColor').addEventListener('click', () => {
		const id = document.getElementById('objects').value;
		const obj = document.getElementById(id);
		const color = document.getElementById('backgroundColor').value;

		history.execute(new BackgroundColorCommand(obj, color));
		showHistory();
	});

	document.getElementById('redo').addEventListener('click', () => {
		history.redo();
		showHistory();
	});

	document.getElementById('undo').addEventListener('click', () => {
		history.undo();
		showHistory();
	});
});