import React, { Component } from 'react';
import { Link } from 'react-router';

import './Header.css';

class Header extends Component {
  render() {
    return <header className="bg-success">
      <div className="inner">
        <h1 className="c-white">🐍</h1>
        <ul className="list-reset">
          <li><Link to="/">home</Link></li>
          <li><Link to="/dashboard">dashboard</Link></li>
        </ul>
        <ul>
          {this.props.loggedIn ? (
            <li>
              <Link to="/logout">logout</Link>
            </li>
          ) : (
            <li>
              <Link to="/register">register</Link>
              <Link to="/login" className="ml">login</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  }
}

export default Header;
