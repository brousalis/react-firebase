import React, { Component } from 'react'

import auth from '../../utils/auth'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    var email = this.refs.email.value
    var pass = this.refs.pass.value
    var _this  = this

    auth.login(email, pass, function(result) {
      if (!result) {
        _this.setState({error: result})
      }

      var location = _this.props.location
      if (location.state && location.state.nextPathname) {
        _this.context.router.replace(location.state.nextPathname)
      } else {
        _this.context.router.replace('/dashboard')
      }
    })
  }

  render() {
    var errors = this.state.error ? <p> {this.state.error} </p> : ''
    return (
      <div>
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>email</label>
            <input ref="email" placeholder="Email"/>
          </div>
          <div>
            <label>password</label>
            <input ref="pass" type="password" placeholder="password" />
          </div>
          {errors}
          <button type="submit">login</button>
        </form>
      </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Login
