"use strict";
// Avec le mot clé "var", le mécanisme de "hoisting" fait que 
// la variable est déclarée même si elle est déclarée plus tard
// dans le code

// déclaration d'une variable
// méthode moderne, avec le mot clé let 
let first_name;
// Avec le mot clé let (mais aussi const), le mécanisme de hoisting 
// n'existe plus
console.log(first_name);


console.log(first_name);
// Affectaction de la variable
first_name = "Bob";
console.log(first_name);

first_name = "Jojo";

console.log(first_name);