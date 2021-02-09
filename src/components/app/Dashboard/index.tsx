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
        <div className="initial-info">
          <span>Julio 10</span>
          <h1 className="title-card">
            Lau <strong>&</strong> Juanes
          </h1>
          <h1 className="title-card">{`${days}: ${hours}: ${minutes}: ${seconds}`}</h1>
        </div>
        <hr />
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
          <h2 className="memories-video-mobile">
            <a href="https://youtu.be/CNNXOD_Hr5Y">Video de invitacion</a>
          </h2>
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
        <hr />
        <h2 className="center">INFO DE LA BODA</h2>
        <div className="info">
          <Card
            title="Ceremonia"
            description="En San Andres a definir"
            time="A definir"
            image="svg/rings.svg"
            iframe={
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17816.79317318093!2d-81.70399848685736!3d12.577158171568625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f05a60874e9c2e9%3A0x83960c0ad1a6052d!2sAeropuerto%20Internacional%20Gustavo%20Rojas%20Pinilla!5e0!3m2!1ses-419!2sbe!4v1612877591841!5m2!1ses-419!2sbe"
                title="map"
                width="250"
                height="150"
                aria-hidden="false"
              ></iframe>
            }
          />
          <Card
            title="Hospedaje"
            description="En San Andres a definir"
            time="A definir"
            image="svg/suitcase.svg"
            iframe={
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17816.79317318093!2d-81.70399848685736!3d12.577158171568625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f05a60874e9c2e9%3A0x83960c0ad1a6052d!2sAeropuerto%20Internacional%20Gustavo%20Rojas%20Pinilla!5e0!3m2!1ses-419!2sbe!4v1612877591841!5m2!1ses-419!2sbe"
                title="map1"
                width="250"
                height="150"
              ></iframe>
            }
          />
          <Card
            title="Recepcion"
            description="En San Andres a definir"
            time="A definir"
            image="svg/cake.svg"
            iframe={
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17816.79317318093!2d-81.70399848685736!3d12.577158171568625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f05a60874e9c2e9%3A0x83960c0ad1a6052d!2sAeropuerto%20Internacional%20Gustavo%20Rojas%20Pinilla!5e0!3m2!1ses-419!2sbe!4v1612877591841!5m2!1ses-419!2sbe"
                title="map2"
                width="250"
                height="150"
              ></iframe>
            }
          />
        </div>
        <div className="info-mobile">
          <h2>Ceremonia: </h2>
          <p>Por definir</p>
          <a href="https://goo.gl/maps/wMfVxEvLUAPecajq5">Mapa</a>
          <h2>Hospedaje: </h2>
          <p>Por definir</p>
          <a href="https://goo.gl/maps/wMfVxEvLUAPecajq5">Mapa</a>
          <h2>Recepcion: </h2>
          <p>Por definir</p>
          <a href="https://goo.gl/maps/wMfVxEvLUAPecajq5">Mapa</a>
        </div>
        <hr />
        <Form />
        <hr />
      </div>
    );
  }
}
