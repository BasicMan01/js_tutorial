class CounterWorker {
	constructor(workerTimeValue) {
		let self = this;

		CounterWorker.instanceCounter++;

		this.id = CounterWorker.instanceCounter;

		this.webWorker = new Worker('js/worker.js');
		this.webWorker.customId = this.id;
		this.webWorker.onmessage = function(event) {
			if (event.data === 0) {
				self.removeItem(this.customId);
			} else {
				let element = document.querySelector('#workerItem_' + this.customId + ' span');
				element.innerHTML = event.data;
			}
		};

		this.addItem(workerTimeValue);
		this.webWorker.postMessage(workerTimeValue);
	}

	addItem(workerTimeValue) {
		let self = this;
		let div = document.createElement('div');
		let span = document.createElement('span');
		let input = document.createElement('input');

		span.innerHTML = workerTimeValue;
		input.type = 'button';
		input.value = 'X';
		input.onclick = function() {
			self.webWorker.terminate();
			self.removeItem(self.id);
		};

		div.className = 'workerItem';
		div.id = 'workerItem_' + this.id;
		div.appendChild(span);
		div.appendChild(input);

		document.getElementById('workerContainer').appendChild(div);
	}

	removeItem(id) {
		let element = document.getElementById('workerItem_' + id);

		element.parentNode.removeChild(element);
	}
}

CounterWorker.instanceCounter = 0;


document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('btnCreateWorker').addEventListener('click', function(event) {
		let workerTimeValue = parseInt(document.getElementById('workerTimeValue').value);

		if (!isNaN(workerTimeValue)) {
			let counterWorker = new CounterWorker(workerTimeValue);
		} else {
			alert('Insert a number!');
		}
	});
});
