export default class FetchData {
  constructor() {

  }
  /**
   * Va récupérer le token sur le serveur
   * Le token sera indispensable pour toute future communication avec le serveur
   * 
   * @returns promise 
   */
  getToken () {
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

  /**
   * 
   * @param {string} token 
   * @param {string} login 
   * @param {string} pwd 
   * 
   * @returns promise
   */
  getUser(token, login, pwd) {
    // création de la requête
    console.log("Dans getUser de FetchData");
    // Va chercher sur le point d'entrée :
    // https://www.coopernet.fr/user/login?_format=json 
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
      .then(response => response.json()) // Teste si la réponse est bien du json
      .then(data => {
        //console.log("success", data);
        if (data.current_user === undefined) {
          throw new Error("Erreur de login");
        } else {
          return data;
        }
      })
  };

  /**
   * Récupère les termes (rubriques) d'un utilisateur donné
   * @param {object} user 
   * @param {string} token 
   * 
   * @returns promise
   */
  getTerms(user, token) {
    // création de la requête
    console.log("Dans getTerms -  User = ", user);
    return fetch("https://www.coopernet.fr/memo/themes/" + user.uid, {
      credentials: "same-origin",
      method: "GET",
      headers: {
        "Content-Type": "application/hal+json",
        "X-CSRF-Token": token,
        Authorization: "Basic " + btoa(user.login + ":" + user.pwd), // btoa = encodage en base 64
      },
    })
      .then((response) => {
        console.log("data reçues dans getTerms avant json() :", response);
        if (response.status === 200) return response.json();
        else throw new Error("Problème de réponse ", response);
      })
      .then((data) => {
        console.log("data reçues dans getTerms :", data);
        if (data) {
          console.log("termes : ", data);
          return data;
        } else {
          throw new Error("Problème de data " + data.message);
        }
      });
  }
}

