import React, { Component } from "react";
import "./Form.scss";
import { addGuests } from "src/services/guest.service";

export default class Form extends Component<{ openConfirModal: any }> {
  state = {
    name: "",
    email: "",
    message: "",
    disableConfirm: true,
  };

  addGuest = () => {
    const { name, email, message } = this.state;
    addGuests(name, email, 0, message).then((data) =>
      data.status ? this.props.openConfirModal() : console.log("error")
    );
  };

  handleName(event: any) {
    this.setState({ name: event.target.value, disableConfirm: false });
  }

  handleEmail(event: any) {
    this.setState({ email: event.target.value });
  }

  handleMessage(event: any) {
    this.setState({ message: event.target.value });
  }

  handleGuests(event: any) {
    this.setState({ guests: parseInt(event.target.value) });
  }

  render() {
    const { name, email, message } = this.state;

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
              defaultValue={name}
              onChange={(e) => this.handleName(e)}
              placeholder="Nombre"
            />
            <input
              className="form-input"
              type="Email"
              name="subject"
              defaultValue={email}
              onChange={(e) => this.handleEmail(e)}
              placeholder="Email"
            />
            <textarea
              name="message"
              id="message"
              defaultValue={message}
              onChange={(e) => this.handleMessage(e)}
              placeholder="Dejanos un mensaje"
              className="form-textarea"
            ></textarea>
            <button
              className="confirm-button"
              disabled={this.state.disableConfirm}
              onClick={() => this.addGuest()}
              type="submit"
            >
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
