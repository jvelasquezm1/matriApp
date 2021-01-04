import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="hero__caption">
        <img className="pasto" src="pasto.jpg" alt="pasto" />
        <span>Julio 10</span>
        <h1 data-animation="fadeInLeft" data-delay=".5s" data-duration="2000ms">
          Juanes<strong> & </strong> Laura
        </h1>
      </div>
    );
  }
}
