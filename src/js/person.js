class Person {
	constructor(name) {
		this._name = name;
	}

	greet() {
		console.log(`Hey, I'm ${this._name}`);
	}
}

export default Person;
