// // Використовуємо this коли хочемо звернутися до екземпляру цього класу
// // ОП: три парадигми:

// // class Calculator {
// //     add(a, b) {
// //         return a + b;
// //     }
// // }

// // const calculator = new Calculator();
// // const calculator2 = new Calculator();

// // console.log(calculator.add(3,5));
// // console.log(calculator2.add(2,6));

// class Person {
// #counter = 0;
//     constructor(name, age) {
//     this.name = name;
//     this.age = age;
// }

// getCounter() {
//     return this.#incrementCounter();

// }
// };

// let person1 = new Person

//наслідування = це потрібно для того щоб скоротити к-ть коді і полегшити обслуговування
// використовуємо прототипи поліморфіз
// const animalPrototype = {
//     speak() {
//         console.log(`${this.name} makes a noise.`);
//     }
// }
//  const dog = {
//     name: 'Dog'
//  }
//  dog.__proto__ = animalPrototype;
//  dog.speak();

// for (let i = 1; i <= 5; i++) {
//     console.log("Hello");
// }

// let greet = "Hello, JavaScript!"
// console.log(greet);

// let name = "Anastasiia";
// let age = 24;

// console.log(`My name is ${name} and I am ${age}.`);

// let age = 20;
//  if (age => 18) {
//     console.log("Enter access!");
//  }
//  else {
//     console.log("Fail!");
//  }

//  for (let i = 1; i <= 10; i++) {
//     console.log("I learning JavaScript");
//  }
