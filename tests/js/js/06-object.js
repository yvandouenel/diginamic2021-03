"use strict";


// Fonction constructeur
function User(login,pwd,firstname, lastname) { // login et pwd sont des paramètres
  // Propriétés de base affectées via les paramètres 
  this.login = login;
  this.pwd = pwd;
  this.firstname = firstname;
  this.lastname = lastname; 
}
Object.prototype.introduceMySelf = function() {
  console.log(`Bonjour, je m'appelle ${this.firstname} ${this.lastname}`);
}

// Création d'une instance d'objet via le mot clé new 
const b = new User("bob","123","Robert","Badinter");// envoi des arguments

// Création d'une instance d'objet via le mot clé new 
const c = new User("christian","456","Christian","Champion");

// b se présente 
b.introduceMySelf();

// c se présente 
c.introduceMySelf();

console.log('b ', b);
console.log('c ', c);

function Animal(firstname, lastname){
  this.firstname = firstname;
  this.lastname = lastname;
}

const filou = new Animal("filou", "Dupond");
console.log('filou : ', filou);

filou.introduceMySelf();

