import React, { Component } from 'react';
import Header from '../components/Header';

import * as firebase from 'firebase';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: (firebase.auth().currentUser !== null)
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        loggedIn: (user !== null)
      });
    });
  }

  render() {
    return (
      <div>
        <Header loggedIn={this.state.loggedIn} />
        <div id="content" role="main">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
