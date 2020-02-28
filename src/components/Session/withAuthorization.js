import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import AuthUserContext from "./context";

const API_URL = "https://api-cardillsports-st.herokuapp.com";

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          localStorage.removeItem("idToken");
          this.props.history.push("/auth/login");
        } else {
          authUser.getIdToken().then(function(idToken) {
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
              });
              
              return "";
            });
          });
        }
      });
    }
    componentWillUnmount() {
      this.listener();
    }
    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }
  return compose(withRouter, withFirebase)(WithAuthorization);
};
export default withAuthorization;
