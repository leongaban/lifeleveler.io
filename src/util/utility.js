import { compose, isEmpty, not } from 'ramda'

const reducer = (accumulator, item) => accumulator + item;

export const notEmpty = compose(not, isEmpty);

export const totaler = (theArray, initialValue=0) => {
	const total = theArray.reduce(reducer, initialValue);
	const average = total / theArray.length;
	return {
		total,
		average
	}
};