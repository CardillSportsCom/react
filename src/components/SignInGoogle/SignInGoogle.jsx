import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

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
        <form onSubmit={this.onSubmit}>
          <button type="submit">Sign In with Google</button>
          {error && <p>{error.message}</p>}
        </form>
      );
    }
  }
  
  const SignInGoogle = compose(
    withRouter,
    withFirebase,
  )(SignInGoogleBase);

  export default SignInGoogle;