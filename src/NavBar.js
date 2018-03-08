import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import whatever else you like here

// Declare your Component here
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Cheng-Tuo Shueh's BTI425 - Project Portal</Link>
          </div>
        </div>
      </nav>
    );
  }
}

// export the component by name
export default NavBar; 