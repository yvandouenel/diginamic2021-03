// Permet d'attendre que le dom soit chargé (pas besoin de defer)
// Cloisonne le code que l'on va écrire (pas de variables globales)
// On s'assure que l'alias $ va fonctionner : en fait jQuery s'écrit aussi $
// On voit que jquery est une fonction ()
// Elle attend en paramètre une fonction anonyme (callback) 
jQuery(function($){
  
  // Premier événement à gérer : la soumission du formulaire pour éviter 
  // le rechargement de la page
  $("form").on("submit",function(e){
    e.preventDefault();
  });

  // Quand on entre une valeur dans l'input euro, on donne la conversion immédiatement das l'input franc
   $('#euro').on("input", function(e){
    // On modifie la valeur de l'input franc en fonction de la valeur de l'input euro
    // en utilisant la méthode val
    $('#franc').val($('#euro').val() * 1.1);
   });

   $('#franc').on("input", function(e){
    // On modifie la valeur de l'input euro  en fonction de la valeur de l'input franc
    // en utilisant la méthode val
    $('#euro').val($('#franc').val() / 1.1);
   });

   // Récupération de la couleur des label
   const color_label = $("label").css("color");
   console.log(`couleur des labels : `, color_label);

   // Modification de la couleur des titres 1
   $("h1:last").css("color", "pink");

   // Boucler sur les éléments du dom récupérés et enrichis par jQuery
   $("p").each(function(){
    console.log($(this).text());
  });

  // Insertion d'un paragraphe avant le formulaire
  $( "<p>Paragraphe avant le formulaire</p>" ).insertBefore( "form#first-form" );

  // au click sur un paragraphe, je cache ou j'affiche le paragraphe suivant
  $("p").on("click", function(e){
    
    //if($(this) !=  $("p:last")) $(this).next().slideToggle(2000);
    $(this).animate({'font-size': '2em','margin-left': '50px'}, 3000,function(){
      $(this).animate({'font-size': '1em','margin-left': '0px'},3000);
    });
  });

  // Animation avec animate
  
});