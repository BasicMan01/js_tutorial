class Rocket {
	constructor() {
	}

	launch() {
		console.log('LAUNCH');
	}

	land() {
		console.log('LAND');
	}
}

class Car {
	constructor() {
	}

	start() {
		console.log('START');
	}

	stop() {
		console.log('STOP');
	}
}

class AbstractAdapter {
	constructor() {
		if (new.target === AbstractAdapter) {
			throw new TypeError("Cannot construct Abstract instances directly");
		}

		if (typeof this.start !== 'function') {
			throw new TypeError('start not implemented in class ' + this.constructor.name);
		}

		if (typeof this.stop !== 'function') {
			throw new TypeError('stop not implemented in class ' + this.constructor.name);
		}
	}
}

class AdapterRocket extends AbstractAdapter {
	constructor() {
		super();

		this.rocket = new Rocket();
	}

	start() {
		this.rocket.launch();
	}

	stop() {
		this.rocket.land();
	}
}

class AdapterCar extends AbstractAdapter {
	constructor() {
		super();

		this.car = new Car();
	}

	start() {
		this.car.start();
	}

	stop() {
		this.car.stop();
	}
}

export {
	AdapterCar,
	AdapterRocket
};