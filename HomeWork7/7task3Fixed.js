function divide(numerator, denominator) {
	if (typeof numerator !== 'number' || typeof denominator !== 'number') {
		throw new Error('Error: not a number');
	}
	if (denominator === 0) {
		throw new Error('Error: division by 0');
	}
	return numerator / denominator;
}

try {
	let result = divide(12, 3);
	console.log(result);
} catch (error) {
	console.log(error.message);
} finally {
	console.log('Work completed');
}

try {
	let result = divide(12, 0);
	console.log(result);
} catch (error) {
	console.log(error.message);
} finally {
	console.log('Work completed');
}

try {
	let result = divide('12', 3);
	console.log(result);
} catch (error) {
	console.log(error.message);
} finally {
	console.log('Work completed');
}

try {
	let result = divide(12, '3');
	console.log(result);
} catch (error) {
	console.log(error.message);
} finally {
	console.log('Work completed');
}
