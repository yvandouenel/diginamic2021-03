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
  xxxx.classList.toggle("hidden");
}

// Faire fonctionner ce code avec element.classList.toggle("hidden");
// Cela implique que vous ayez écrit le code css .hidden {display: none;}