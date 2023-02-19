class Beep {
	#audioContext;

	constructor() {
		this.#audioContext = new AudioContext();
	}

	play(frequency, duration, volume, type) {
		const oscillator = this.#audioContext.createOscillator();
		const gain = this.#audioContext.createGain();

		oscillator.connect(gain);
		oscillator.frequency.value = frequency;
		oscillator.type = type;

		gain.connect(this.#audioContext.destination);
		gain.gain.value = volume * 0.01;

		oscillator.start(this.#audioContext.currentTime);
		oscillator.stop(this.#audioContext.currentTime + duration * 0.001);
	}
}



document.addEventListener('DOMContentLoaded', () => {
	const beep = new Beep();

	document.getElementById('btnPlaySound').addEventListener('click', () => {
		const duration = parseInt(document.getElementById('rangeDuration').value);
		const frequency = parseInt(document.getElementById('rangeFrequency').value);
		const volume = parseInt(document.getElementById('rangeVolume').value);
		const type = document.getElementById('selectType').value;

		beep.play(frequency, duration, volume, type);
	});

	document.getElementById('rangeDuration').addEventListener('input', () => {
		document.getElementById('durationValue').innerHTML = document.getElementById('rangeDuration').value;
	});

	document.getElementById('rangeFrequency').addEventListener('input', () => {
		document.getElementById('frequencyValue').innerHTML = document.getElementById('rangeFrequency').value;
	});

	document.getElementById('rangeVolume').addEventListener('input', () => {
		document.getElementById('volumeValue').innerHTML = document.getElementById('rangeVolume').value;
	});
});