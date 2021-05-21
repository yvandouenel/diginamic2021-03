// Permet d'attendre que le dom soit chargé (pas besoin de defer)
// Cloisonne le code que l'on va écrire (pas de variables globales)
// On s'assure que l'alias $ va fonctionner : en fait jQuery s'écrit aussi $
// On voit que jquery est une fonction ()
// Elle attend en paramètre une fonction anonyme (callback) 
jQuery(function($){
   // Récupération d'éléments du dom
   //$('.h1').hide(3000).show(2000);

   // Création d'éléments du dom
   const h2 = $("<h2>Titre de niveau 2</h2><p>C'est chouette jQuery</p>");
   // Insertion de h2 en dernier fils de body
   h2.appendTo("body"); 

   // Autre façon de créer des éléments du dom 
   $("<p></p>",{
    text: "Hello",
    id: "p1",
    class: "p"
  }).appendTo("body");

  // Ajouter un élément après le premier h1
  $( "h1" ).first().after( "<p>Test Yvan</p>" );

  // Utilisation des getter et des setter
  // getter
  const text_first_h1 = $('h1').first().text();
  console.log(`texte du premier h1 : ${text_first_h1}`);

  // setter : pour changer le texte de mon dernier h1 par exemple
  $('h1').last().text("Hello").hide(3000);
});