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
// nodejs library that concatenates classes
import classNames from "classnames";

import { ClapSpinner } from "react-spinners-kit";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

const LeagueLeaders = () => {
  const API_URL = "https://api-cardillsports-st.herokuapp.com";
  const [bigChartData, setBigChartData] = useState("data1");
  const [data, setData] = useState([]);
  const [gameIndex, setGameIndex] = useState(0);
  const [errors, setErrors] = useState(null);

  const token = localStorage.getItem("idToken");

  const shouldHideSeasons = true; //remove this when we have season;

  async function fetchData() {
    const res = await fetch(
      API_URL + "/view/leagueLeaders/5ac6aaefe8da8276a88ffc07",
      {
        headers: new Headers({
          Authorization: token
        })
      }
    );

    res
      .json()
      .then(res => setData(res.leagueLeaders))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const spinner = <ClapSpinner size={30} frontColor="#f88c1d" />;

  return (
    <>
      <div className="content">
        {shouldHideSeasons ? null : (
          <Row>
            <Col xs="12">
              <ButtonGroup
                className="btn-group-toggle float-right"
                data-toggle="buttons"
              >
                <Button
                  color="primary"
                  id="0"
                  size="sm"
                  tag="label"
                  className={classNames("btn-simple", {
                    active: this.state.bigChartData === "data1"
                  })}
                  onClick={() => this.setBgChartData("data1")}
                >
                  <input defaultChecked name="options" type="radio" />
                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                    This Season
                  </span>
                  <span className="d-block d-sm-none">
                    <i className="tim-icons icon-single-02" />
                  </span>
                </Button>
                <Button
                  color="primary"
                  id="1"
                  size="sm"
                  tag="label"
                  className={classNames("btn-simple", {
                    active: this.state.bigChartData === "data2"
                  })}
                  onClick={() => this.setBgChartData("data2")}
                >
                  <input name="options" type="radio" />
                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                    All Time
                  </span>
                  <span className="d-block d-sm-none">
                    <i className="tim-icons icon-gift-2" />
                  </span>
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        )}
        <Row>
          <Col xs="12">
            <h1>League Leaders</h1>
          </Col>
        </Row>
        {data.length === 0 ? (
          spinner
        ) : (
          <Row>
            <Col xs="3">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Wins</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <Table responsive>
                        <tbody>
                          {data.length === 0
                            ? null
                            : data.wins.map(stat => (
                                <tr>
                                  <td>
                                    <div className="flag">
                                      <img
                                        style={{
                                          width: "30px",
                                          height: "30px"
                                        }}
                                        alt="..."
                                        src={stat.imageUri}
                                      />
                                    </div>
                                  </td>
                                  <td>{stat.name}</td>
                                  <td className="text-right">{stat.value}</td>
                                </tr>
                              ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="3">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Points</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <Table responsive>
                        <tbody>
                          {data.length === 0
                            ? null
                            : data.points.map(stat => (
                                <tr>
                                  <td>
                                    <div className="flag">
                                      <img
                                        style={{
                                          width: "30px",
                                          height: "30px"
                                        }}
                                        alt="..."
                                        src={stat.imageUri}
                                      />
                                    </div>
                                  </td>
                                  <td>{stat.name}</td>
                                  <td className="text-right">{stat.value}</td>
                                </tr>
                              ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="3">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Assists</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <Table responsive>
                        <tbody>
                          {data.length === 0
                            ? null
                            : data.assists.map(stat => (
                                <tr>
                                  <td>
                                    <div className="flag">
                                      <img
                                        style={{
                                          width: "30px",
                                          height: "30px"
                                        }}
                                        alt="..."
                                        src={stat.imageUri}
                                      />
                                    </div>
                                  </td>
                                  <td>{stat.name}</td>
                                  <td className="text-right">{stat.value}</td>
                                </tr>
                              ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="3">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Rebounds</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <Table responsive>
                        <tbody>
                          {data.length === 0
                            ? null
                            : data.rebounds.map(stat => (
                                <tr>
                                  <td>
                                    <div className="flag">
                                      <img
                                        style={{
                                          width: "30px",
                                          height: "30px"
                                        }}
                                        alt="..."
                                        src={stat.imageUri}
                                      />
                                    </div>
                                  </td>
                                  <td>{stat.name}</td>
                                  <td className="text-right">{stat.value}</td>
                                </tr>
                              ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="3">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Steals</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <Table responsive>
                        <tbody>
                          {data.length === 0
                            ? null
                            : data.steals.map(stat => (
                                <tr>
                                  <td>
                                    <div className="flag">
                                      <img
                                        style={{
                                          width: "30px",
                                          height: "30px"
                                        }}
                                        alt="..."
                                        src={stat.imageUri}
                                      />
                                    </div>
                                  </td>
                                  <td>{stat.name}</td>
                                  <td className="text-right">{stat.value}</td>
                                </tr>
                              ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="3">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Blocks</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <Table responsive>
                        <tbody>
                          {data.length === 0
                            ? null
                            : data.blocks.map(stat => (
                                <tr>
                                  <td>
                                    <div className="flag">
                                      <img
                                        style={{
                                          width: "30px",
                                          height: "30px"
                                        }}
                                        alt="..."
                                        src={stat.imageUri}
                                      />
                                    </div>
                                  </td>
                                  <td>{stat.name}</td>
                                  <td className="text-right">{stat.value}</td>
                                </tr>
                              ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="3">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Turnovers</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <Table responsive>
                        <tbody>
                          {data.length === 0
                            ? null
                            : data.turnovers.map(stat => (
                                <tr>
                                  <td>
                                    <div className="flag">
                                      <img
                                        style={{
                                          width: "30px",
                                          height: "30px"
                                        }}
                                        alt="..."
                                        src={stat.imageUri}
                                      />
                                    </div>
                                  </td>
                                  <td>{stat.name}</td>
                                  <td className="text-right">{stat.value}</td>
                                </tr>
                              ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}
      </div>
    </>
  );
};

export default LeagueLeaders;
