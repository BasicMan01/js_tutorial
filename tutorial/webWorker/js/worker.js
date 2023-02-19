onmessage = function(event) {
	let counter = event.data;

	const intervalId = setInterval(function() {
		if (counter > 0) {
			counter--;
			postMessage(counter);
		} else {
			clearInterval(intervalId);
			close();
		}
	}, 1000);
};