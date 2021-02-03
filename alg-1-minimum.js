function getMin(numbers) {
	if (numbers.length === 0) {
		throw new Error('Should not be an empty array!');
	}
	if (numbers.length === 1)  {
		return numbers[0];
	}
	let currentMinimum = numbers[0];
	
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] < currentMinimum) {
			currentMinimum = numbers[i];
		}
	}
	
	return currentMinimum;
}

const testNumbers = [3,1,2,4,5];

const min = getMin(testNumbers);

console.log(min);