// Faire en sorte qu'au click sur un h1, le paragraphe suivant soit 
// caché ou montré .
// Il faudra parcourir les résultats de querySelectorAll
// et il faudra trouver le frère ou soeur suivant (next sibling)
const list_h1 = document.querySelectorAll("h1");

for(let i = 0; i < list_h1.length; i ++) {
  // chaque h1
  list_h1[i].onclick = function() {
    console.log('click sur h1');
    // Je vais chercher l'élément suivant avec nextSibling
    const next_p = this.nextElementSibling;
    next_p.classList.toggle("hidden");
  }
}