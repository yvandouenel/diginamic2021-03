"use strict";

//ancienne méthode
// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype.bark = function() {
//   console.log('woof woof');
// }

// Nouvelle méthode avec class
class Dog {
  constructor(name) {
    // Propriétés
    this.name = name;
  }
  // Méthodes déclarées différemment et qui est ajoutée au prototype
  bark() {
    console.log('woof woof');
  }
}
// Création d'une instance
const filou = new Dog("Filou");
filou.bark();
console.log('filou : ', filou);

// Chien de chasse
class HuntingDog extends Dog {
  constructor(name, game) {
    super(name);
    this.game = game;
  }
  hunt() {
    console.log("Chut, je chasse !!!");
  }
  bark() {
    console.log("j'aboie pas, je chasse");
  }
}

const rex = new HuntingDog("rex", "lapin");
rex.bark();
rex.hunt();
console.log('rex : ', rex);