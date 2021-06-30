/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import Card from "./Cards";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

export default class Dashboard extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    confirmModal: false,
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

  handleOpen = () => {
    this.setState({ confirmModal: true });
  };

  handleClose = () => {
    this.setState({ confirmModal: false });
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
          <h2 className="memories-video-mobile fs-l">
            <a href="https://youtu.be/CNNXOD_Hr5Y">Video de invitacion</a>
          </h2>
          <div className="memories-paragraph">
            <img width="40%" src="ornament.png" alt="ornament" />
            <p className="fs-l">
              Había una vez un chico y una chica en un hermoso país que se
              hicieron amigos y por mucho fueron los mejores amigos (Para los
              que los conocían). La chica se fue para un país muy muy lejano y
              ahora su novio (Mejor amigo) vino donde ella estaba 2 años
              después, al parecer ser mejores amigos (novios) no fue suficiente
              y quisieron crear un momento inolvidable con las personas mas
              importantes para ellos. Este no es el fin de la historia, solo es
              el comienzo… Si estas leyendo esto, eres una de estas personas
              especiales.
            </p>
            <h3>¿Quieres ser parte de la historia? </h3>
            <h3>TE ESPERAMOS</h3>
          </div>
        </div>
        <hr />
        <h2 className="center">INFO DE LA BODA</h2>
        <div className="info">
          <div className="dark-banner">
            <p className="p-banner">
              Lo sentimos mucho pero el coronavirus nos obliga a tener un numero
              reservado de invitados presenciales el cual ya llego a su limite,
              pronto estaremos enviando un link para que nos puedas acompañar
              desde zoom
            </p>
          </div>

          <Card
            title="Ceremonia"
            description="San Andres"
            time="Por confirmar"
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
            description="Tenemos algunas recomendaciones
              para tu viaje y estadía, si ninguna te convence
              y prefieres buscar por tu cuenta es perfecto también!
              Lo importante es poder verte allá"
            time={
              <div className="options">
                <a
                  href="https://www.instagram.com/p/CH2z9NFAcVX/?igshid=gmbcrnletiix"
                  target="_blank"
                >
                  Opcion 1
                </a>
                <a
                  href="https://www.instagram.com/p/CCRk0fPgxg0/?igshid=xs2t94mv5qyn"
                  target="_blank"
                >
                  Opción 2
                </a>
                <a
                  href="https://www.instagram.com/p/CKhfJYCgo1L/?igshid=s2jzsbqpepcb"
                  target="_blank"
                >
                  Opción 3
                </a>
              </div>
            }
            image="svg/suitcase.svg"
            iframe=""
          />
        </div>
        <div className="info">
          <Card
            title="Recepcion"
            description="San Andres - Hotel arena blanca"
            time="Cra. 1 #2-1, San Andrés y Providencia, Colombia"
            image="svg/cake.svg"
            iframe={
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.0222997551123!2d-81.69193168569902!3d12.580781226738361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f05a60f51e4b281%3A0x1713ec72c9959574!2sHotel%20Arena%20Blanca!5e0!3m2!1ses-419!2sbe!4v1613051510356!5m2!1ses-419!2sbe"
                title="map2"
                width="250"
                height="150"
              ></iframe>
            }
          />
          <Card
            title="Vestimenta"
            description={
              <div>
                <p>
                  Para esta ocasión especial tendremos diferentes actividades,
                  será una boda muy fuera de lo común ... Qué debes traer?
                </p>
                <p>
                  <strong>Hombres:</strong> Guayabera para la ceremonia y camisa
                  blanca y pantalón corto para la recepción
                </p>
                <p>
                  <strong>Mujeres:</strong> vestido formal para playa y vestido
                  blanco para la recepcion
                </p>
                <p>
                  La recepcion será en la noche y es importante que todos estén
                  de blanco... Así que escoge tu mejor outfit y ¡¡Prepárate para
                  divertirte!!
                </p>
              </div>
            }
            time=""
            image="svg/blazer.svg"
            iframe=""
          />
        </div>
        <div className="info-mobile">
          <h2>Ceremonia: </h2>
          <p>Por definir</p>
          <a href="https://goo.gl/maps/wMfVxEvLUAPecajq5">Mapa</a>
          <h2>Hospedaje: </h2>
          <p>
            Tenemos algunas recomendaciones para tu viaje y estadía, si ninguna
            te convence y prefieres buscar por tu cuenta es perfecto también! Lo
            importante es poder verte allá
          </p>
          <div className="options">
            <a
              href="https://www.instagram.com/p/CH2z9NFAcVX/?igshid=gmbcrnletiix"
              target="_blank"
            >
              Opcion 1
            </a>
            <a
              href="https://www.instagram.com/p/CCRk0fPgxg0/?igshid=xs2t94mv5qyn"
              target="_blank"
            >
              Opción 2
            </a>
            <a
              href="https://www.instagram.com/p/CKhfJYCgo1L/?igshid=s2jzsbqpepcb"
              target="_blank"
            >
              Opción 3
            </a>
          </div>
          <h2>Recepcion: </h2>
          <p>San Andres - Hotel arena blanca (Cra. 1 #2-1)</p>
          <a href="https://g.page/hotelarenablanca?share">Mapa</a>
          <h2>Vestimenta: </h2>
          <div>
            <p>
              Para esta ocasión especial tendremos diferentes actividades, será
              una boda muy fuera de lo común ... Qué debes traer?
            </p>
            <p>
              <strong>Hombres:</strong> Guayabera para la ceremonia y camisa
              blanca y pantalón corto para la recepción
            </p>
            <p>
              <strong>Mujeres:</strong> vestido formal para playa y vestido
              blanco para la recepcion
            </p>
            <p>
              La recepcion será en la noche y es importante que todos estén de
              blanco... Así que escoge tu mejor outfit y ¡¡Prepárate para
              divertirte!!
            </p>
          </div>
        </div>
        <hr />
        <Dialog
          open={this.state.confirmModal}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
        >
          <DialogTitle id="form-dialog-title">Confirmado</DialogTitle>
          <DialogContent>
            Gracias por confirmar, nos vemos en San Andres para seguir haciendo
            historia
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
        <hr />
      </div>
    );
  }
}
