
/* Le scope d'une variable déclarée avec le mot clé var est global si  
 elle est déclarée en dehors d'une fonction

 Quel est le scope d'une variable déclarée avec le mot clé let ou const ?
 Global si déclarée en dehors d'un block de code 
*/
let i = 3;
let j = 5;

console.log(i + j);

let a = "Hello";
let b = "Bob";

console.log(`${a} ${b}`); // utilisation des backtick
console.log(a + " "  + b); // concaténation classique