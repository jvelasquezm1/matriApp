import React, { Component } from "react";
import "./Form.scss";
import { addGuests } from "src/services/guest.service";

export default class Form extends Component {
  addGuest = () => {
    addGuests("Juan", "juan@exe.com", 2, "Holiii").then(() =>
      console.log("OK")
    );
  };
  render() {
    return (
      <div className="contact-form">
        <div className="form-wrapper">
          <div id="contact-form">
            <h2>¿Nos acompañas?</h2>
            <img src="tittle_img2.png" alt="" />
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Nombre"
            />
            <input
              className="form-input"
              type="Email"
              name="subject"
              placeholder="Email"
            />
            <select
              className="form-input form-select"
              name="select"
              id="select2"
            >
              <option value="">1 Invitado</option>
              <option value="">2 Invitados</option>
              <option value="">3 Invitados</option>
              <option value="">4 Invitados</option>
            </select>
            <textarea
              name="message"
              id="message"
              placeholder="Dejanos un mensaje"
              className="form-textarea"
            ></textarea>
            <button onClick={() => this.addGuest()} type="submit">
              Confirmar
            </button>
          </div>
          <div className="shape-inner-flower">
            <img src="shape2.png" className="shpe2" alt="" />
          </div>
          <div className="shape-outer-flower">
            <img src="from-top.png" className="outer-top" alt="" />
            <img src="from-bottom.png" className="outer-bottom" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
