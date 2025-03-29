const user = [ 
    {name: "Anna", email: "annadoe123@gmail.com", age: 25},
    {name: "Oleg", email: "olegoleg@gmail.com", age: 34},
    {name: "Inna", email: "innainna@gamil.com", age: 27},
    {name: "Tanya", email: "tanya123@gmail.com", age: 26}
]

for (const {name, email, age} of user) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
    
}