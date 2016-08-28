import React, { Component } from 'react'

import Firebase from 'firebase'
import Config from '../../firebase.config.js'

import Main from './Main.js'

class App extends Component {
  constructor(props) {
    super(props)

    Firebase.initializeApp(Config)

    this.state = {
      loggedIn: false,
      connected: false
    }
  }

  componentWillMount() {
    Firebase.auth().onAuthStateChanged(function(user) {
      this.setState({
        loggedIn: (user !== null ? true : false),
        connected: true
      })
    }.bind(this))
  }

  render() {
    return <Main {...this.props} {...this.state} />
  }
}

export default App
