import {Container, JsonStrategy, XmlStrategy, CsvStrategy} from './strategy.js';

document.addEventListener('DOMContentLoaded', () => {
	let container = new Container();

	container.addPair('name', 'Mueller');
	container.addPair('street', 'Applestreet 24');
	container.addPair('email', 'pm@test.de');

	container.setStrategy(new JsonStrategy());
	container.show();
	container.setStrategy(new XmlStrategy());
	container.show();
	container.setStrategy(new CsvStrategy());
	container.show();
});