"use strict";
// Syntaxe des objets littéraux (JSON)
Object.prototype.bark = function() {
  console.log('woof woof');
}
Object.prototype.legs_number = 4;
const paquito = {
  name: "Paquito",
  breed: "Lévrier Afghan"
}
console.log(paquito);
paquito.bark();

const poncho = {
  name: "Poncho",
  breed: "Epagnol"
}
console.log(poncho);
poncho.bark();

console.log('Nombre de pattes pour Poncho : ' + poncho.legs_number);
console.log('Nombre de pattes pour Paquito : ' + paquito.legs_number);

const objetlepluscourtdumonde = {};
console.log('############################');
objetlepluscourtdumonde.bark();