import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.array,
  };

  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>

        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
