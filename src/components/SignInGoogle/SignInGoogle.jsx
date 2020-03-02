import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  onSubmit = event => {
    var that = this;
    const API_URL = "https://api-cardillsports-st.herokuapp.com";
    this.props.firebase
      .doSignInWithGoogle()
      .then(() => {
        this.setState({ error: null });
        this.props.firebase.auth.currentUser.getIdToken().then(function(idToken) {
          // <------ Get firebase token
          const opts = {
            token: idToken
          };
          fetch(API_URL + "/auth", {
            method: "post",
            body: JSON.stringify(opts)
          }).then(function(response) {
            response.json().then(data => {
              localStorage.setItem("idToken", data["id_token"]);
              localStorage.setItem("playerId", data.player.id);
              localStorage.setItem("playerImage", data.player.imageUri);
              that.props.history.push("/admin/dashboard/");
            });

            return "";
          });
        });
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  render() {
    const { error } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
                  <img
                  alt="cardill header"
                  src={require("./../../assets/img/header.png")}
                />
            <form onSubmit={this.onSubmit}>
              <button type="submit">
                <img
                  alt="cardill header"
                  src={require("./../../assets/img/google.png")}
                />
              </button>
              {error && <p>{error.message}</p>}
            </form>
          </div>
    );
  }
}

const SignInGoogle = compose(withRouter, withFirebase)(SignInGoogleBase);

export default SignInGoogle;
