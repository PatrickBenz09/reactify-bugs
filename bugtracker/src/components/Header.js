import React, { Component } from 'react'
import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <h2>Bug Tracker by HACKTIV8</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    )
  }
}

export default Header
