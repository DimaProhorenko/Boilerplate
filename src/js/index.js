import Person from './person';
import '../sass/main.scss';

const me = new Person('Dima');

const hello = () => {
	console.log(me);
};
