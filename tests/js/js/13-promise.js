// Explication sur les promesses
// Déclaration de la fonction qui renvoie une promesse
function testPromise() {
  return new Promise(
    function(resolve, reject){
      if(Math.random() > 0.5) {
        // Cas favorable
        resolve("Promesse tenue");
      } else reject(new Error("Promesse non tenue"));
    }
  );
}

// Appel de la fonction qui renvoie une promesse
testPromise()
.then(function(data){
  console.log('Cas Favorable 1 ' + data);
  // Rappel d'une promesse (ici la même)
  return testPromise();
})
.then(function(data){
  console.log('Cas Favorable 2 ' + data);
})
.catch(function(error){
  console.log("Erreur attrapée " + error.message);
});