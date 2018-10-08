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

class PositionCommand extends Command {
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

class BackgroundColorCommand extends Command {
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

export {
	History,
	BackgroundColorCommand,
	PositionCommand
};