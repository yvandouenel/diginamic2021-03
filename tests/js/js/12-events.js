//console.log('this : ', this);
//console.log('window : ', window);
// Récupération de l'élément du dom qui correspond à mon unique bouton
const p = document.querySelector("p");

//console.log('propriété onclick du bouton : ', button.onclick);
let cpt = 0;

// Affecter une référence à une fonction gestionnaire d'événement à mon bouton
// Attention à ne pas affecter l'appel d'une fonction (synchrone)
// A chaque click sur le bouton, la fonction gestionnaire d'événement
// sera appelée
p.onclick = function(event) {
  cpt ++;
  console.log('Click sur le p', cpt);
  console.log('this : ', this);
  console.log('event.target', event.target);
}
//console.log('p.onclick : ', p.onclick);

// Faire en sorte que le click sur le titre supprime ou cache
// le paragraphe

