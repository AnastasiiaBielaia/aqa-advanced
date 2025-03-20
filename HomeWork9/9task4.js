const person = {
    firstName: "Anna",
    lastName: "Doe",
    age: 25
  }
  
  person.email = "annadoe123@gmail.com";
  delete person.age;
  console.log(person);