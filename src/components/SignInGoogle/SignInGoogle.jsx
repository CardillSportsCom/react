import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import { Card, CardHeader, CardBody } from "reactstrap";

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  onSubmit = event => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(() => {
        this.setState({ error: null });
        this.props.history.push("/admin/dashboard/");
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  render() {
    const { error } = this.state;
    return (
      <div className="card mb-3">
        <div className="card bg-dark text-white">
          <img alt="cardill header" src={require("./../../assets/img/header.png")} />
          <div className="card-img-overlay center">
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
        </div>
      </div>
    );
  }
}

const SignInGoogle = compose(withRouter, withFirebase)(SignInGoogleBase);

export default SignInGoogle;
