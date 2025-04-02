//1.1
async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

fetchTodo()
    .then(data => console.log('Data:', data))
    .catch(error => console.error('Error:', error));


//1.2
async function fetchUser1() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

fetchUser1()
    .then(data => console.log('Data:', data))
    .catch(error => console.error('Error:', error));

// promise
async function fetchData() {
    try {
        const [todo, user] = await Promise.all([fetchTodo(), fetchUser1()]);
        console.log('Promise.all results:', { todo, user });
    } catch (error) {
        console.error('Error Promise.all:', error);
    }

    try {
        const result = await Promise.race([fetchTodo(), fetchUser1()]);
        console.log('Promise.race results:', result);
    } catch (error) {
        console.error('Error Promise.race:', error);
    }
}

fetchData();
