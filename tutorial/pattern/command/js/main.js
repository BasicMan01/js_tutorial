class History {
	constructor() {
		this.undos = [];
		this.redos = [];
	}

	execute(cmd) {
		cmd.execute();
		this.undos.push(cmd);
	}

	redo() {
		if (this.redos.length) {
			let cmd = this.redos.pop();

			cmd.execute();
			this.undos.push(cmd);
		}
	}

	undo() {
		if (this.undos.length) {
			let cmd = this.undos.pop();

			cmd.undo();
			this.redos.push(cmd);
		}
	}
}

class Command {
	constructor() {
		this.name = '';

		if (new.target === Command) {
			throw new TypeError("Cannot construct Abstract instances directly");
		}

		if (typeof this.execute !== 'function') {
			throw new TypeError('execute not implemented in class ' + this.constructor.name);
		}

		if (typeof this.undo !== 'function') {
			throw new TypeError('undo not implemented in class ' + this.constructor.name);
		}
	}
}

class positionCommand extends Command {
	constructor(obj, value) {
		super();

		this.name = 'change position';

		this.obj = obj;
		this.newValue = value;
		this.oldValue = {
			'x':  this.obj.style.left,
			'y': this.obj.style.top
		};
	}

	execute() {
		this.obj.style.left = this.newValue.x;
		this.obj.style.top = this.newValue.y;
	}

	undo() {
		this.obj.style.left = this.oldValue.x;
		this.obj.style.top = this.oldValue.y;
	}
}

class backgroundColorCommand extends Command {
	constructor(obj, value) {
		super();

		this.name = 'change backgroundColor';

		this.obj = obj;
		this.newValue = value;
		this.oldValue = this.obj.style.backgroundColor;
	}

	execute() {
		this.obj.style.backgroundColor = this.newValue;
	}

	undo() {
		this.obj.style.backgroundColor = this.oldValue;
	}
}



document.addEventListener('DOMContentLoaded', () => {
	let history = new History();

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
		let id = document.getElementById('objects').value;
		let obj = document.getElementById(id);
		let pos = {
			'x': document.getElementById('positionX').value + 'px',
			'y': document.getElementById('positionY').value + 'px'
		};

		history.execute(new positionCommand(obj, pos));
		showHistory();
	});

	document.getElementById('executeBackgroundColor').addEventListener('click', () => {
		let id = document.getElementById('objects').value;
		let obj = document.getElementById(id);
		let color = document.getElementById('backgroundColor').value;

		history.execute(new backgroundColorCommand(obj, color));
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