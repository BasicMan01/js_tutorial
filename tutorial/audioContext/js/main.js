class Beep {
	constructor() {
		this.audioContext = new AudioContext();
	}

	play(frequency, duration, volume, type) {
		this.oscillator = this.audioContext.createOscillator();
		this.gain = this.audioContext.createGain();

		this.oscillator.connect(this.gain);
		this.oscillator.frequency.value = frequency;
		this.oscillator.type = type;

		this.gain.connect(this.audioContext.destination);
		this.gain.gain.value = volume * 0.01;

		this.oscillator.start(this.audioContext.currentTime);
		this.oscillator.stop(this.audioContext.currentTime + duration * 0.001);
	}
}



document.addEventListener('DOMContentLoaded', function() {
	let beep = new Beep();

	document.getElementById('btnPlaySound').addEventListener('click', (event) => {
		let duration = parseInt(document.getElementById('rangeDuration').value);
		let frequency = parseInt(document.getElementById('rangeFrequency').value);
		let volume = parseInt(document.getElementById('rangeVolume').value);
		let type = document.getElementById('selectType').value;

		beep.play(frequency, duration, volume, type);
	});

	document.getElementById('rangeDuration').addEventListener('input', (event) => {
		document.getElementById('durationValue').innerHTML = document.getElementById('rangeDuration').value;
	});

	document.getElementById('rangeFrequency').addEventListener('input', (event) => {
		document.getElementById('frequencyValue').innerHTML = document.getElementById('rangeFrequency').value;
	});

	document.getElementById('rangeVolume').addEventListener('input', (event) => {
		document.getElementById('volumeValue').innerHTML = document.getElementById('rangeVolume').value;
	});
});
