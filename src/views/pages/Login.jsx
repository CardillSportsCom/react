/*!

=========================================================
* Black Dashboard PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import AuthNavbar from "components/Navbars/AuthNavbar.jsx";

// reactstrap components
import {
  Container,
  Col
} from "reactstrap";
import SignInGoogle from '../../components/SignInGoogle/SignInGoogle';

class Login extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }
  render() {
    return (
      <>
       <AuthNavbar brandText={"Login Page"} />
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" lg="4" md="6">
              HEY LOGIN HERE
              <SignInGoogle/>
            </Col>
          </Container>
        </div>
      </>
    );
  }
}

export default Login;
