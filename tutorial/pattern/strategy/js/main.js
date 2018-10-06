class Strategy {
	constructor() {
		if (new.target === Strategy) {
			throw new TypeError("Cannot construct Abstract instances directly");
		}

		if (typeof this.output !== 'function') {
			throw new TypeError('output(data) not implemented in class ' + this.constructor.name);
		}
	}
}

class JsonStrategy extends Strategy {
	constructor() {
		super();
	}

	output(data) {
		console.log(JSON.stringify(data));
	}
}

class XmlStrategy extends Strategy {
	constructor() {
		super();

		this.serializer = new XMLSerializer();
	}

	output(data) {
		let output = '<xml><data>';

		for (let key in data) {
			if (data.hasOwnProperty(key)) {
				output += '<' + key + '>' + data[key] + '</' + key + '>';
			}
		}

		output += '</data></xml>';

		console.log(output);
	}
}

class CsvStrategy extends Strategy {
	constructor() {
		super();
	}

	output(data) {
		let output = [];

		for (let key in data) {
			if (data.hasOwnProperty(key)) {
				output.push(key + '=' + data[key]);
			}
		}

		console.log(output.join());
	}
}

class Container {
	constructor() {
		this.data = {};
		this.strategy = null;
	}

	setStrategy(strategy) {
		this.strategy = strategy;
	}

	addPair(key, value) {
		this.data[key] = value;
	}

	show() {
		if (this.strategy !== null) {
			this.strategy.output(this.data);
		}
	}
}



document.addEventListener('DOMContentLoaded', () => {
	let container = new Container();

	container.addPair('name', 'Mueller');
	container.addPair('street', 'Applestreet 24');
	container.addPair('email', 'pm@test.de');

	container.setStrategy(new JsonStrategy());
	container.show();
	container.setStrategy(new XmlStrategy());
	container.show();
	container.setStrategy(new CsvStrategy());
	container.show();
});