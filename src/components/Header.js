import React, { Component } from 'react';
import { Link } from 'react-router';

import './Header.css';

class Header extends Component {
    // var loginOrOut;
    // var register;

    // if (this.state.loggedIn) {
    //   loginOrOut = <li>
    //   </li>;
    //   register = null;
    // } else {
    //   loginOrOut = <li>
    //   </li>;
    //   register = <li>
    //         Register
    //       </Link>
    //   </li>;
    // }

  render() {
    return <header className="">
      <div className="inner">
        <h1>weakauras</h1>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/dashboard">dashboard</Link></li>
        </ul>
        <ul>
          {this.props.loggedIn ? (
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          ) : (
            <li>
              <Link to="/register">Register</Link>
              <Link to="/login" className="ml">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  }
}

export default Header;
