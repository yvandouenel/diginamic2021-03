"use strict";

const fruits = ["Orange", "Cerise", "Kiwi"];

console.log("fruits : ", fruits);
console.log(fruits[2]);// affiche Banane


console.log('taille du tableau : ' + fruits.length);

console.log('taille du tableau : ' + fruits.push("Pomme"));
console.log("fruits : ", fruits);

// Parcours du tableau avec la méthode forEach
// forEach est une High Order Function
// forEach attend en paramètre une fonction (callback) qui va
// s'exécuter pour chaque élément du tableau
fruits.forEach(function(fruit) {
  fruit = fruit + "s";
  console.log("Fruit au pluriel : ", fruit);
});

// Supprime le dernier élément du tableau
console.log('Je viens de supprimer : ' + fruits.pop());
console.log("fruits : ", fruits);

console.log('Index de Cerise', fruits.indexOf("Cerise"));
console.log('Index de Mangue', fruits.indexOf("Mangue"));

const li_fruits = fruits.map(elt => `<li>${elt}</li>`);
console.log('li_fruits : ', li_fruits);
console.log('fruits : ', fruits);

const fruits_courts = fruits.filter(elt => elt.length < 5);
console.log('fruits_courts : ', fruits_courts);
