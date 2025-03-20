const car1 = {
    brand: "Mazda",
    model: "3",
    year: 2014
  }
  
  const car2 = {
    brand: "BMW",
    model: "520",
    owner: 2016
  }
  
  const car3 = {
    ...car1,
    ...car2
  }
  
  console.log(car3);
  