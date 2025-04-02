function calculateArea1(width, height) {
	//function declaration
	return width * height;
}

console.log(calculateArea1(5, 10));

const calculateArea2 = function (width, height) {
	//function expression
	return width * height;
};

console.log(calculateArea2(5, 10));

const calculateArea3 = (width, height) => width * height; //arrow function

console.log(calculateArea3(5, 10));
