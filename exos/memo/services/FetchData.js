export default class FetchData {
  constructor() {

  }
  getToken = function () {
    // Récupération du token via un fetch. Ici le point d'entrée (endpoint) est
    // https://www.coopernet.fr/rest/session/token/
    // Ma requête utilise le "verbe" par défaut qui est "GET"
    return fetch("https://www.coopernet.fr/rest/session/token/")
      .then(function (response) {
        if (response.status !== 200) { // Si c'est différent de 200, c'est qu'il y a un pb
          throw new Error("Le serveur n'a pas répondu correctement : " + response.status);
        } else return response.text(); // Test si la réponse est bien un "string"
      })
      .then(function (data) { // data correspond au retour du résolve (ici deux lignes au dessus)
        console.log("Token récupéré : ", data);
        return data;
      })
  }
}