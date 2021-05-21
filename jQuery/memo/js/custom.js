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
    });

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