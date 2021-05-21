class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  let myCar = new Car("Ford", 2014);
  let myCar2 = new Car("Renault", 2005);
console.log("My car is " + myCar.age() + " years old.");
console.log("Ma voiture a " + myCar2.age() + " ans.");