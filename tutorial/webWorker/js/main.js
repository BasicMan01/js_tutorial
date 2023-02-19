class CounterWorker {
	#id;
	#webWorker;

	constructor(workerTimeValue) {
		CounterWorker.instanceCounter++;

		this.#id = CounterWorker.instanceCounter;

		this.#webWorker = new Worker('js/worker.js');
		this.#webWorker.customId = this.#id;
		this.#webWorker.onmessage = (event) => {
			if (event.data === 0) {
				this.removeItem(event.currentTarget.customId);
			} else {
				const element = document.querySelector('#workerItem_' + event.currentTarget.customId + ' span');
				element.innerHTML = event.data;
			}
		};

		this.addItem(workerTimeValue);
		this.#webWorker.postMessage(workerTimeValue);
	}

	addItem(workerTimeValue) {
		const div = document.createElement('div');
		const span = document.createElement('span');
		const input = document.createElement('input');

		span.innerHTML = workerTimeValue;
		input.type = 'button';
		input.value = 'X';
		input.onclick = () => {
			this.#webWorker.terminate();
			this.removeItem(this.#id);
		};

		div.className = 'workerItem';
		div.id = 'workerItem_' + this.#id;
		div.appendChild(span);
		div.appendChild(input);

		document.getElementById('workerContainer').appendChild(div);
	}

	removeItem(id) {
		const element = document.getElementById('workerItem_' + id);

		element.parentNode.removeChild(element);
	}
}

CounterWorker.instanceCounter = 0;


document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('btnCreateWorker').addEventListener('click', () => {
		const workerTimeValue = parseInt(document.getElementById('workerTimeValue').value);

		if (!isNaN(workerTimeValue)) {
			new CounterWorker(workerTimeValue);
		} else {
			alert('Insert a number!');
		}
	});
});