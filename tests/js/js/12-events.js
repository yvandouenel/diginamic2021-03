// Récupération de l'élément du dom qui correspond à mon unique bouton
const h1 = document.querySelector("h1");
const p = document.querySelector("p");

// Faire en sorte que le click sur le titre supprime ou cache
// le paragraphe
// 1 : récupérer la référence du titre de niveau 1
// 2 : affecter à l'événement click du titre une fonction
// 3 : cette fonction récupère l'élément du dom qui correspond au paragraphe
// 4 : cacher ou supprimer le paragraphe
h1.onclick = function() {
  // opérateur ternaire
  //p.hidden = p.hidden ? false : true;
  
 /*  if(p.hidden == true) p.hidden = false;
  else p.hidden = true; */
  p.classList.toggle("hidden");
}

// Faire en sorte qu'au click sur un h1, le paragraphe suivant soit 
// caché ou montré .
// Il faudra parcourir les résultats de querySelectorAll
// et il faudra trouver le frère ou soeur suivant (next sibling)