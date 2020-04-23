class Observable {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		if (typeof observer === 'function') {
			this.observers.push(observer);
		}
	}

	notifyObservers(value) {
		this.observers.forEach((observer) => {
			observer(value);
		});
	}
}

export default Observable;