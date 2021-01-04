import React, { PureComponent } from "react";
import "./SendMailComponent.scss";
import { postAsync } from "../../backend/api";
import Alert from "@material-ui/lab/Alert";
import Tooltip from "@material-ui/core/Tooltip";
import Snackbar from "@material-ui/core/Snackbar";

class SendMailComponent extends PureComponent {
  state = {
    disabled: true,
    email: "",
    alert: false
  };

  handleEmail = e => {
    this.setState({ email: e.target.value }, () => {
      this.state.email.length &&
        this.verifMail(this.state.email) &&
        this.setState({ disabled: false });
    });
  };
  verifMail(champ) {
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if (!regex.test(champ)) {
      return false;
    } else {
      return true;
    }
  }
  sendMail = async () => {
    let data = await postAsync(this.state.email);
    let alert = data ? true : false;
    this.setState({ email: " ", disabled: true, alert: alert });
  };
  handleClose = () => {
    this.setState({ alert: false });
  };
  render() {
    let { disabled, email, alert } = this.state;
    return (
      <>
        <div className="container-mail">
          <h2>Recevez une copie de votre simulation par mail</h2>
          <div>
            <Tooltip title="Veuillez écrire une adresse e-mail" arrow>
              <input
                type="email"
                placeholder="Votre email"
                name="email"
                className="email"
                value={email}
                onChange={e => this.handleEmail(e)}
              />
            </Tooltip>
            <button
              className={disabled ? "disabled" : "submit"}
              disabled={disabled}
              onClick={this.sendMail}
            >
              Envoyer
            </button>
          </div>
        </div>
        <Snackbar
          open={alert}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <Alert severity="success" onClose={this.handleClose}>
            This is a success send —- you can check your e-mail
          </Alert>
        </Snackbar>
      </>
    );
  }
}

export default SendMailComponent;
