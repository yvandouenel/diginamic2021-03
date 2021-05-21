// syntaxe des objets littéraux ou syntaxe Json
// En fait, les objets en js sont des tableaux associatifs
const car = {
    name: "punto",
    type: "Fiat", 
    model: "500", 
    color: "white",
    /**
     * start est une propriété de type function, c'est donc une méthode
     * dans une méthode, this représente l'instance de l'objet qui appelle la méthode
     */
    start: function() {
        console.log('car dans start : ', this);
        console.log(this.name + ' fait vroum vroum');
        console.log(this["name"] + ' fait vroum vroum');

    }
}

console.log('car : ', car.type);
console.log('car : ', car["type"]); // la clé n'est ni plus ni moins que le nom de la propriété

// comment appeler la méthode start ?
// Attention, une méthode doit s'appeler depuis une instance d'objet
car.start();
car["start"]();

const person = {
    firstName: "John",
    lastName: "Doe"
  };
  
alert(person.firstName);
