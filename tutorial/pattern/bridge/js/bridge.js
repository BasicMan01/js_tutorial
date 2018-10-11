class Shape {
	constructor(canvas, color) {
		if (new.target === Color) {
			throw new TypeError("Cannot construct Abstract instances directly");
		}

		if (typeof this.draw !== 'function') {
			throw new TypeError('draw not implemented in class ' + this.constructor.name);
		}

		this.color = color;
		this.context = canvas.getContext("2d");
		this.context.clearRect(0, 0, canvas.width, canvas.height);
	}
}

class Circle extends Shape {
	constructor(canvas, color) {
		super(canvas, color);
	}

	draw() {
		this.context.beginPath();
		this.context.fillStyle = this.color.getHex();
		this.context.arc(150, 75, 40, 0, 2 * Math.PI);
		this.context.fill();
		this.context.stroke();
	}
}

class Rectangle extends Shape {
	constructor(canvas, color) {
		super(canvas, color);
	}

	draw() {
		this.context.beginPath();
		this.context.fillStyle = this.color.getHex();
		this.context.rect(50, 30, 200, 80);
		this.context.fill();
		this.context.stroke();
	}
}



class Color {
	constructor() {
		if (new.target === Color) {
			throw new TypeError("Cannot construct Abstract instances directly");
		}

		if (typeof this.getHex !== 'function') {
			throw new TypeError('getHex not implemented in class ' + this.constructor.name);
		}
	}
}

class RedColor extends Color {
	constructor() {
		super();
	}

	getHex() {
		return '#FF0000';
	}
}

class GreenColor extends Color {
	constructor() {
		super();
	}

	getHex() {
		return '#00FF00';
	}
}

export {
	Circle,
	Rectangle,
	RedColor,
	GreenColor
};