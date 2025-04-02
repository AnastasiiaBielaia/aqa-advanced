function divide(numerator, denominator) {
	try {
		if (typeof numerator !== 'number' || typeof denominator !== 'number') {
			throw new Error('Error: not a number');
		}
		if (denominator === 0) {
			throw new Error('Error: division by 0');
		}
		return numerator / denominator;
	} catch (error) {
		console.log(error.message);
	} finally {
		console.log('Work completed');
	}
}

let result = divide(12, 3);
if (result !== undefined) console.log(result);

result = divide(12, 0);
if (result !== undefined) console.log(result);

result = divide('12', 3);
if (result !== undefined) console.log(result);

result = divide(12, '3');
if (result !== undefined) console.log(result);
