"use strict";
fetch("https://www.coopernet.fr/rest/session/token/")
  .then(function (response) {
    if (response.status !== 200) { // Si c'est différente de 200, c'est qu'il y a un pb
      throw new Error("Le serveur n'a pas répondu correctement : " + response.status);
    } else return response.text(); // renvoie une promesse
  })
  .then(function (data) { // data correspond au retour du résolve (ici deux lignes au dessus)
    console.log("Token récupéré : ", data);
    // Maintenant que j'ai le token, je peux afficher le formulaire
    document.querySelector("#form-user").classList.remove("hidden");
    
    // Appel de getUser
    return  getUser(data,"y","y");
  })
  .then(function (data) { 
    // J'ai les données de l'utilisateur
    console.log('Données utilisateur : ', data);
  })
  .catch(error => { console.log("Erreur attrapée : ", error.message) });

  function successGetUser() {
    console.log('Dans successGetUser');
  }
  function failGetUser() {
    console.log('Dans failGetUser');
  }

  // Appel de getUser
 


 function getUser (token,login,pwd) {
    // création de la requête
    console.log("Dans getUser de coopernet.");
    return fetch("https://www.coopernet.fr/user/login?_format=json", {
      credentials: "same-origin",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": token
      },
      body: JSON.stringify({
        name: login,
        pass: pwd
      })
    })
      .then(response => response.json())
      .then(data => {
        //console.log("success", data);
        if (data.current_user === undefined) {
          console.log("Erreur de login");
          
          throw new Error("Erreur de data : ", data);
        } else {
          return data;
        }
      })
      .catch(error => { console.error("Erreur attrapée dans tokenSuccess", error) });

  };