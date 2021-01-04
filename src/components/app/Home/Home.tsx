import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="app-header">
        <div className="card">
          <div className="imgBox">
            <img className="wedding-img" src="boda.jpg" alt="tesoro" />
          </div>
          <div className="details">
            <h2 className="invitation">INVITACION A NUESTRA BODA</h2>
            <img className="finger" src="dedo.png" alt="dedo" />
            <button className="link-initial">
              <Link to="/dashboard">Go</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
