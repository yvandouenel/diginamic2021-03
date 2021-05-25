// imrc
import React, { Component } from 'react';
import Card from './Card';
import Term from './Term';
import FetchData from './../services/FetchData';

// ccs
class App extends Component {
  // appel du constructeur
  constructor() {
    super();

    this.state = { 
      title: "Mémo",
      display_form: false,
      token: "",
      user: {},
      terms: []
     }

     // propriété qui va nous permettre de communiquer avec le serveur
     this.fd = new FetchData();

  }
  

  renderForm() {
    if(this.state.display_form) {
      return(
        <form action="">
          <label htmlFor="question">question</label>
          <input type="text" />
          <input type="submit" value="Envoyer" />
          <p onClick={this.handletoggleForm}>Cacher le formulaire</p>
        </form>
      )
    }
  }
  
  handletoggleForm = () => {
    console.log(`Dans handletoggleForm`);
    console.log("this : ", this);
    // opérateur ternaire () ? valeur : autre_valeur;
    let display_form = this.state.display_form ? false : true;
    // Set State compare l'objet qu'on lui donne en argument avec le state du component en cours
    // S'il y a une différence, alors, render est appelée et l'interface modifiée
    let state = {... this.state }; // clone du state du component en cours
    state.display_form = display_form;// modification de la propriété qui m'intéresse

     this.setState(state);
  }
  /**
   * Appelé une fois que le composant est "monté"
   */
  componentDidMount  = () => {
    console.log(`dans componentDidMount`);
    this.fd.getToken()
    .then(token => {
      // ici j'ai bien récupéré mon token
      console.log(`token dans componentDidMount  : ${token}`);
       // Modification du state
      const state = { ... this.state};
      state.token = token;
      this.setState(state); 
      return this.fd.getUser(token, "y", "y");
    })
    .then(user => {
      console.log(`user dans componentDidMount : `, user);
      
      // Modification du state
      const state = { ... this.state};
      state.user = {
        login: "y",
        pwd: "y",
        uid: user.current_user.uid
      }
      this.setState(state);
      return this.fd.getTerms(this.state.user, this.state.token);
    })
    .then(terms => {
      console.log(`terms dans componentDidMount : `, terms);
      
      // Modification du state
      const state = { ... this.state};
      state.terms = terms;
      this.setState(state);
    })
    .catch(error => {
      error.log("Erreur dans componentDidMount :",  error.message)
    });
    
  }
  renderTerms = () => {
    if(this.state.terms.length) {
      return(
        <nav>
          {this.state.terms.map(term => <Term toto="hello" key={term.id} name={term.name} />)}
        </nav>
      )
    }
  }
  /**
   * Renvoie un message en fonction de la valeur du token
   * @returns string 
   */
  renderToken = () => {
    if(this.state.token) {
      return (
        <p className="text-success">Token ok</p>
      )
    } else {
      return (
        <p className="text-danger">Problème de token</p>
      )
    }
  }
  renderUser = () => {
    // Test si objet vide ?
    if(this.state.user.hasOwnProperty('uid')) {
      return(
        <p className="text-success">User ok</p>
      )
    } else {
      return (
        <p className="text-danger">Utilisateur non connecté</p>
      )
    }
  }
  render() {
    return (
      <div className="container">
        <header>
          <h1>Memo</h1>
          {this.renderTerms()}
          {this.renderUser()}
        </header>
        <main>
          Main ici
        </main>
        <footer> 
          Footer ici
          <div id="msg">{this.renderToken()}</div>
        </footer>
      </div>
    );
  }
}

export default App;
