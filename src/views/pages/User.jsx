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
import React, { useState, useEffect } from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardText,
  FormGroup,
  Input,
  Row,
  Col
} from "reactstrap";

const User = () => {
  const API_URL = "https://api-cardillsports-st.herokuapp.com";
  const [userData, setUserData] = useState([]);
  const [errors, setErrors] = useState(null);

  const token = localStorage.getItem("idToken");
  console.log(token);
  const playerId = localStorage.getItem("playerId");

  async function fetchData() {
    const res = await fetch(API_URL + "/player/" + playerId, {
      headers: new Headers({
        Authorization: token
      })
    });

    res
      .json()
      .then(res => setUserData(res.player))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const profileCard = (
    <CardBody>
      <Row>
        <Col className="pr-md-1">
          <img alt="..." className="avatar" src={userData.imageUri} />
          <h1>{userData.firstName} {userData.lastName}</h1>
          <h3>{userData.email}</h3>
        </Col>
      </Row>
    </CardBody>
  );

  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  {userData.length !== 0 ? profileCard : null}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default User;
