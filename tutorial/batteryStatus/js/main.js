document.addEventListener('DOMContentLoaded', function() {
	function calculateBatteryTime(value) {
		if (value == Infinity || value <= 0) {
			return 'N.A.';
		}

		let total = parseInt(value / 60);
		let minutes = total % 60;
		let hours = (total - minutes) / 60;

		return hours + ':' + minutes;
	}

	function updateBatteryStatus(battery) {
		document.getElementById('level').value = battery.level * 100;

		if (battery.charging) {
			document.getElementById('charging').innerHTML = '&#x1F50C;';
			document.getElementById('time').innerHTML = calculateBatteryTime(battery.chargingTime);
		} else {
			document.getElementById('charging').innerHTML = '&#x1F50B;';
			document.getElementById('time').innerHTML = calculateBatteryTime(battery.dischargingTime);
		}
	}

    navigator.getBattery().then(battery => {
		updateBatteryStatus(battery);

		battery.onchargingchange = function () {
			updateBatteryStatus(battery);
		};

		battery.onlevelchange = function () {
			updateBatteryStatus(battery);
		};

		battery.ondischargingtimechange = function () {
			updateBatteryStatus(battery);
		};

		battery.ondischargingtimechange = function () {
			updateBatteryStatus(battery);
		};
	});
});
