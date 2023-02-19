class Observable {
	#observers;

	constructor() {
		this.#observers = [];
	}

	addObserver(observer) {
		this.#observers.push(observer);
	}

	notifyObservers() {
		this.#observers.forEach((observer) => {
			observer.update();
		});
	}
}

class Motor extends Observable {
	#isDamage;

	constructor() {
		super();

		this.#isDamage = false;

		setInterval(this.run.bind(this), 500);
	}

	damage() {
		this.#isDamage = true;
	}

	repair() {
		this.#isDamage = false;
	}

	run() {
		if (!this.#isDamage) {
			console.log('MOTOR RUN');
		} else {
			this.notifyObservers();
		}
	}
}

class Observer {
	constructor() {
		if (new.target === Observer) {
			throw new TypeError('Cannot construct Abstract instances directly');
		}

		if (typeof this.update !== 'function') {
			throw new TypeError('update not implemented in class ' + this.constructor.name);
		}
	}
}

class Lamp extends Observer {
	constructor() {
		super();
	}

	update() {
		console.log('BLINK');
	}
}

class Alarm extends Observer {
	#audioContext;

	constructor() {
		super();

		this.#audioContext = new AudioContext();
	}

	update() {
		console.log('BEEP');

		const oscillator = this.#audioContext.createOscillator();
		const gain = this.#audioContext.createGain();

		oscillator.connect(gain);
		oscillator.frequency.value = 800;
		oscillator.type = 'square';

		gain.connect(this.#audioContext.destination);
		gain.gain.value = 0.1;

		oscillator.start(this.#audioContext.currentTime);
		oscillator.stop(this.#audioContext.currentTime + 0.2);
	}
}

export {
	Alarm,
	Lamp,
	Motor
};