class Strategy {
	constructor() {
		if (new.target === Strategy) {
			throw new TypeError('Cannot construct Abstract instances directly');
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
	}

	output(data) {
		let output = '<xml><data>';

		for (const key in data) {
			if (Object.prototype.hasOwnProperty.call(data, key)) {
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
		const output = [];

		for (const key in data) {
			if (Object.prototype.hasOwnProperty.call(data, key)) {
				output.push(key + '=' + data[key]);
			}
		}

		console.log(output.join());
	}
}

class Container {
	#data;
	#strategy;

	constructor() {
		this.#data = {};
		this.#strategy = null;
	}

	setStrategy(strategy) {
		this.#strategy = strategy;
	}

	addPair(key, value) {
		this.#data[key] = value;
	}

	show() {
		if (this.#strategy !== null) {
			this.#strategy.output(this.#data);
		}
	}
}

export {
	Container,
	JsonStrategy,
	XmlStrategy,
	CsvStrategy
};