import React, { Component } from 'react'
import * as firebase from 'firebase'

import auth from '../../utils/auth'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    var email = this.refs.email.value
    var pw = this.refs.pw.value
    var _this  = this

    firebase.auth().signInWithEmailAndPassword(email, pw).then(function(result) {
      var location = _this.props.location
      if (location.state && location.state.nextPathname) {
          _this.context.router.replace(location.state.nextPathname)
      } else {
          _this.context.router.replace('/dashboard')
      }
      // User signed in!
      console.log('User signed in!')
      // var uid = result.user.uid
    }).catch(function(error) {
      this.setState({error: error})
    })
  }

  render() {
    var errors = this.state.error ? <p> {this.state.error} </p> : ''
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1> Login </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label> Email </label>
            <input className="form-control" ref="email" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input ref="pw" type="password" className="form-control" placeholder="Password" />
          </div>
          {errors}
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Login
