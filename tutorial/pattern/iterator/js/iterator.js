class Iterator {
	constructor(object) {
		this._counter = 0;
		this._object = object;
	}

	 hasNext() {
		return this._counter < this._object.length;
	}

	next() {
		return this._object[this._counter++];
	}

	reset() {
		this._counter = 0;
	}
}

class ObjectContainer {
	constructor() {
		this._container = [];
		this._it = new Iterator(this._container);
	}

	add(object) {
		this._container.push(object);
	}

	traverse(callback) {
		if (typeof callback === 'function') {
			this._it.reset();

			while(this._it.hasNext()) {
				callback(this._it.next());
			}
		}
	}
}

export {
	ObjectContainer
};