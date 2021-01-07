import React, { Component } from "react";
import Card from "./Cards";
import Form from "./Form";

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
            <iframe
              title="memories-video"
              width="608px"
              height="342.4px"
              src="https://www.youtube.com/embed/CNNXOD_Hr5Y?autoplay=1"
              allow="autoplay"
              allowFullScreen
            ></iframe>
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
        <h2 className="center">INFO DE LA BODA</h2>
        <div className="info">
          <Card
            title="ceremonia"
            description="front"
            time="front"
            image="svg/rings.svg"
          />
          <Card
            title="hospedaje"
            description="front"
            time="front"
            image="svg/suitcase.svg"
          />
          <Card
            title="recepcion"
            description="front"
            time="front"
            image="svg/cake.svg"
          />
        </div>
        <Form />
        <button className="up-button" onClick={this.scrollTop}>
          Up
        </button>
      </div>
    );
  }
}
