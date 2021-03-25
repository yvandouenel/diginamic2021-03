"use strict";

let i = 12;
// Test avec if
if(i < 12) {
  console.log('i est inférieur à 12');
} else if(i == 12) {
  console.log('i est égal à 12');
} else {
  console.log('i est supérieur à 12');
}

// Boucle for
for(let j = 0; j < 10; j = j + 1) {
  console.log('j : ', j);
}

const cereales = ["Blé","Orge","Malt"];
for(let j = 0; j < cereales.length; j++) {
  console.log(`Céréale ${j} : ${cereales[j]}`);
}