import React, { Component } from 'react'
import Header from '../components/Header'

import './Main.css'

class Main extends Component {
  render() {
    return (
      <div>
        <Header loggedIn={this.props.loggedIn} />
        <div id="content" role="main">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main
