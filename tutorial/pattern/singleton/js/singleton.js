let secure = Symbol('private constructor');

class Singleton {
	constructor(token) {
		if (secure !== token) {
			throw new Error('Please use the getInstance() static method instead');
		}
	}

	setText(text) {
		this.text = text;
	}

	static getInstance() {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton(secure);
		}

		return Singleton.instance;
	}
}

export default Singleton;