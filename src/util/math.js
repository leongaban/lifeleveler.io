const reducer = (accumulator, item) => accumulator + item;

export const totaler = (theArray, initialValue=0) => {
	const total = theArray.reduce(reducer, initialValue);
	const average = total / theArray.length;
	return {
		total,
		average
	}
};