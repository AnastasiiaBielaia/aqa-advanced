//1.1
function fetchTodo() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}
		return response.json();
	});
}

fetchTodo()
	.then((data) => console.log('Data:', data))
	.catch((error) => console.error('Error:', error));

//1.2.
function fetchUser1() {
	return fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => {
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		return response.json();
	});
}

fetchUser1()
	.then((data) => console.log('Data:', data))
	.catch((error) => console.error('Error:', error));

//promise
Promise.all([fetchTodo(), fetchUser1()])
	.then(([todo, user]) => {
		console.log('Promise.all results:', { todo, user });
	})
	.catch((error) => console.error('Error Promise.all:', error));

Promise.race([fetchTodo(), fetchUser1()])
	.then((result) => {
		console.log('Promise.race results:', result);
	})
	.catch((error) => console.error('Error Promise.race:', error));
