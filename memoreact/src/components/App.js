// imrc
import React, { Component } from 'react';

import Term from './Term';
import Column from './Column';
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
      terms: [],
      columns: []
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
  handleClickTerm = (tid) => {
    console.log(`Dans handleClickTerm. Term id: `, tid);
    // Récupère les datas via la méthode getCards de FetchData
    this.fd.getCards(this.state.user, this.state.token, tid)
    .then(data => {
      // Ici ,j'ai bien la donnée en étant sûr que c'est du json
      console.log(`data dans handleClickTerm : `, data);
      // Hydrate la propriété columns du state via setState
      const state = { ... this.state};
      state.columns = data;
      this.setState(state);

    })
    .catch(error => {error.log("Problème dans handleClickTerm", error.message)});
  }

  renderColumns = () => {
    if (this.state.columns.length) {
      return(
        <section id="columns" className="d-flex justify-content-between">
          {this.state.columns.map(column => <Column 
          key={column.id}
          name={column.name}
          />)}
        </section>
      )
    }
  }

  renderTerms = () => {
    if(this.state.terms.length) {
      return(
        <nav>
          {this.state.terms.map(term => <Term 
          onClickTerm={this.handleClickTerm} 
          tid={term.id}
          key={term.id} 
          name={term.name} />)}
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
          {this.renderColumns()}
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
