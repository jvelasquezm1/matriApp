import React, { Component } from "react";

export default class Dashboard extends Component {
  scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  render() {
    return (
      <div className="hero__caption">
        <img className="pasto" src="pasto.jpg" alt="pasto" />
        <span>Julio 10</span>
        <h1 className="title-card">
          Lau <strong>&</strong> Juanes
        </h1>
        <div className="memories">
          <div className="memories-video">
            <video width="100%" autoPlay={true} controls>
              <source src="Boda.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="memories-paragraph">
            <h1>Nosotros</h1>
            <img width="40%" src="ornament.png" alt="ornament" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              animi reiciendis, ducimus voluptate a ex, velit sint eveniet dicta
              ab corporis doloribus libero omnis et recusandae alias fuga
              voluptatem. Maxime?
            </p>
          </div>
        </div>
        <div>
          <h2>INFO DE LA BODA</h2>
        </div>
        <button className="up-button" onClick={this.scrollTop}>
          Up
        </button>
      </div>
    );
  }
}
