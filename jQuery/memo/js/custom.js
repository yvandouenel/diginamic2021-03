jQuery(function($){
    console.log(`jquery est bien chargé`);

    // Gestion du click sur les boutons d'ajout de carte
    $(".column-memo .btn-success").on("click", function() {
        console.log(`click sur le bouton d'ajout de carte`);
        $('#form-add-card').modal('show');
    });

    // Gestion du click sur le bouton "enregistrer" pour ajouter une carte
    $("#submit-btn-add").on("click", function() {
        console.log(`click sur le bouton de validation du formualaire d'ajout de carte`);
        
        // Création de l'élément du dom correspondant à la carte
        createDOMCard();

        // Cacher la modale
        $('#form-add-card').modal('hide');
    });

   // Exercices à rendre pour vendredi 28 mai 2021
   // Faire en sorte que les boutons d'ajout de carte ajoutent bien dans la bonne colonne (parmi les 4)
   // Faire en sorte que chaque carte soit créée avec le contenu de la question et de la réponse provenant du formulaire
   // Ajouter un bouton qui permet de supprimer chaque carte (ainsi que tout le mécanisme qui permet réellement de supprimer la carte)
   // Ajouter un bouton qui permet de modifier chaque carte (ainsi que tout le mécanisme qui permet réellement de modifier la carte)

   // Utilisation de la méthode "fetch" pour récupérer les cartes et les afficher dans les bonnes colonnes en cliquant 
   // sur les termes (html, css, )

   // Si tout cela est trop compliqué pour vous, vous pourrez me présenter du code plus simple (vos propres exercices) et je noterai en fonction de la complexité du code et surtout de votre capacité à répondre à mes questions.


/**
 * Création et ajout d'une carte dans le DOM
 */
    function createDOMCard() {
        let html_card = "";
        html_card += `<article class="mb-4 card bg-secondary p-1 pb-3 text-light">`;
        html_card += `<div class="d-flex">`;
        html_card += `<i class="fas fa-arrow-circle-left h3"></i>`;
        html_card += `<h4 class="pl-2 pr-2">Qui est l'inventeur du web ?</h4>`;
        html_card += `<i class="fas fa-arrow-circle-right h3"></i>`;
        html_card += `</div>`;
        html_card += ` <div class="d-flex pl-2 pr-2 justify-content-between align-items-center">`;
        html_card += `<button class="btn btn-warning">Proposer une réponse</button>`;
        html_card += `<i class="fas fa-cog h3 m-0"></i>`;
        html_card += `</div>`;
        html_card += `</article>`;
       

        $(html_card).appendTo(".column-memo:first");
            
    }

});