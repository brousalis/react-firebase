import React, { Component } from 'react'

import auth from '../../utils/auth'

class Register extends Component {
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
    var _this = this
    auth.register(email, pass, function(result) {
      if (!result) {
        _this.setState({error: result})
      }
      _this.context.router.replace('/')
    })
  }

  render() {
    var errors = this.state.error ? <p> {this.state.error} </p> : ''
    return (
      <div>
        <h1>register</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>email</label>
            <input ref="email" placeholder="email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input ref="pass" type="password" placeholder="password" />
          </div>
          {errors}
          <button type="submit">register</button>
        </form>
      </div>
    )
  }
}

Register.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Register
