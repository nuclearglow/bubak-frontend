import React, { Component } from 'react';
import logo from '../../assets/bubak-logo.jpg';
import './Bubak.scss';

class Bubak extends Component {
  render() {
    return (
      <div className="bubak">
        <header className="bubak-header">
          <img src={logo} className="bubak-logo" alt="logo" />
          {/* <div className="bubak-overlay"></div> */}
          <p>
            Punk-Konzerte in der Oetinger Villa
          </p>
        </header>
      </div>
    );
  }
}

export default Bubak;
