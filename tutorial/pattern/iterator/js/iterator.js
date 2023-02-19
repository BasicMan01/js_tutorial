class Iterator {
	#counter;
	#object;

	constructor(object) {
		this.#counter = 0;
		this.#object = object;
	}

	hasNext() {
		return this.#counter < this.#object.length;
	}

	next() {
		return this.#object[this.#counter++];
	}

	reset() {
		this.#counter = 0;
	}
}

class ObjectContainer {
	#container;
	#it;

	constructor() {
		this.#container = [];
		this.#it = new Iterator(this.#container);
	}

	add(object) {
		this.#container.push(object);
	}

	traverse(callback) {
		if (typeof callback === 'function') {
			this.#it.reset();

			while(this.#it.hasNext()) {
				callback(this.#it.next());
			}
		}
	}
}

export {
	ObjectContainer
};