import React, { Component } from "react";
import Card from "./Cards";
import Form from "./Form";

export default class Dashboard extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  calculateTimeLeft = () => {
    let difference = +new Date("07/10/2021") - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    this.setState({
      days: timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days,
      hours: timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours,
      minutes:
        timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes,
      seconds:
        timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds,
    });
  };

  componentDidMount() {
    this.calculateTimeLeft();
    setInterval(this.calculateTimeLeft, 1000);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className="hero__caption">
        {/* <img className="pasto" src="pasto.jpg" alt="pasto" /> */}
        <div className="pasto">
          <span>Julio 10</span>
          <h1 className="title-card">
            Lau <strong>&</strong> Juanes
          </h1>
          <h1 className="title-card">{`${days}: ${hours}: ${minutes}: ${seconds}`}</h1>
        </div>
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
      </div>
    );
  }
}
