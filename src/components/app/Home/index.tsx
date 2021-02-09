import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  getGuest = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString) as any;
    const guest = urlParams.get("guest");
    return guest ? guest.charAt(0).toUpperCase() + guest.slice(1) : "";
  };
  render() {
    return (
      <div className="app-header">
        <div className="card">
          <div className="imgBox">
            <img className="wedding-img" src="boda.jpg" alt="tesoro" />
          </div>
          <div className="details">
            <h2 className="invitation">Invitacion a nuestra boda</h2>
            <h2 className="invitation">{this.getGuest()}</h2>
            <Link to="/dashboard">
              <img width="20%" src="sign.png" alt="sign" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
