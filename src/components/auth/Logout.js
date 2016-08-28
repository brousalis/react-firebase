import React, { Component } from 'react'

import auth from '../../utils/auth'

class Logout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false
    }
  }

  componentDidMount() {
    auth.logout((result) => {
      this.setState({ loggedIn: result })
    })
  }

  render() {
    return <p>you are now logged out</p>
  }
}

Logout.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Logout
